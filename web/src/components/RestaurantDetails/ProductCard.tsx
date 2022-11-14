import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { addQuantity, subQuantity, removeFromCart } from '../../redux/cartRedux';
import Button from '../Button';

import {
  AddBtn,
  AddBtnWrapper,
  AddedBtnContainer,
  Amount,
  BtnContainer,
  Counter,
  Icon,
  InnerContainer,
  ProductCardImg,
  ProductItemCard,
  ProductNameContainer,
  RemoveBtn,
  SubtractBtn,
} from './productcard-styles';

const ProductCard = ({ product }) => {
  const [count, setCount] = useState(product.count);
  const [added] = useState(true);
  const dispatch = useDispatch();

  return (
    <>
      <ProductItemCard>
        <ProductCardImg alt="menu" src={product.logo} />
        <InnerContainer>
          <ProductNameContainer>
            <h3>{product.title}</h3>
            <p>{product.desc}</p>
          </ProductNameContainer>
          <AddBtnWrapper>
            <BtnContainer>
              <SubtractBtn
                disabled={count > 1 ? false : true}
                onClick={() => {
                  setCount(count - 1);
                  dispatch(subQuantity(product.id));
                }}
              >
                -
              </SubtractBtn>
              <Counter>{count}</Counter>
              <AddBtn
                onClick={() => {
                  setCount(count + 1);
                  dispatch(addQuantity(product.id));
                }}
              >
                +
              </AddBtn>
            </BtnContainer>
            <Amount>₦{count * product.price}</Amount>
          </AddBtnWrapper>
        </InnerContainer>
        <AddedBtnContainer>
          <Button disabled={added} smallest>
            {added ? 'Added' : 'Add +'}
          </Button>
          {added && (
            <RemoveBtn
              onClick={() => {
                dispatch(removeFromCart(product.id));
              }}
            >
              Remove <Icon src="/images/menuDelete.png" />
            </RemoveBtn>
          )}
        </AddedBtnContainer>
      </ProductItemCard>
    </>
  );
};

export default ProductCard;
