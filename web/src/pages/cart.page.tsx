//@ts-nocheck
import React, { useState, useEffect, useMemo } from 'react';

import { useMutation, useQuery } from '@apollo/client';
import { Image, useBoolean, useToast } from '@chakra-ui/react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import { AUTH_TOKEN } from '../components/constants';
import Payment from '../components/Global/Payment';
import LoginModal from '../components/RestaurantDetails/LoginModal';
import { InnerContainer } from '../components/RestaurantDetails/loginmodal-styles';
import {
  AddBtn,
  AddedBtnContainer,
  Amount,
  MenuCard,
  MenuCardImg,
  MenuNameContainer,
  SubtractBtn,
} from '../components/RestaurantDetails/menu-styles';
import { BtnContainer, Counter, RemoveBtn } from '../components/RestaurantDetails/productcard-styles';
import { Row } from '../components/RestaurantDetails/restaurantabout-styles';
import SimilarPlacesSlider from '../components/SimilarPlacesSlider';
import config from '../config';
import {
  CONFIRM_PAYMENT_ORDER,
  CREATE_ORDER,
  CREATE_PAYMENT_INTENT,
  RESTAURANT_DETAIL_QUERY,
} from '../graphQL/queries';
import { addQuantity, emptyCart, removeFromCart, subQuantity } from '../redux/cartRedux';
import styles from '../styles/Home.module.css';
import { getRestaurantId } from '../utils/helpers';

import { Box2, Box2a, Button, InnerSection, Line, Main, Section, Section1, Section2 } from './_cart';
import BusinessLayout from './business.layout';

const Cart = () => {
  const [total, setTotal] = useState();
  const [modal, setModal] = useState(false);
  const cart = useSelector((state) => state.cart);
  const token = localStorage.getItem(AUTH_TOKEN);
  const toast = useToast();
  //const dispatch = useDispatch();
  const router = useRouter();
  function getUser() {
    if (router.isReady) {
      const userID = router.query._id;
      if (userID) {
        return userID;
      }
      return null;
    }
  }

  const dispatch = useDispatch();

  const { data: restaurantData } = useQuery(RESTAURANT_DETAIL_QUERY, {
    variables: {
      _id: getRestaurantId(getUser() as string),
    },
  });

  const stripePromise = useMemo(
    () => loadStripe(`${process.env.NODE_ENV === 'production' ? config.stripe.LIVE : config.stripe.TEST}`),
    [],
  );

  const [createOrder, { data: order }] = useMutation(CREATE_ORDER, {
    variables: {
      data: {
        restaurantId: restaurantData?._id,
        items: cart.map((el) => ({
          id: el._id,
          amount: el.count,
        })),
        mode: 'DELIVERY',
      },
    },
    onCompleted: () => {
      toast({ status: 'success', title: 'Successfully created order' });
    },
    onError: (err) => {
      toast({ status: 'error', title: err.message });
    },
  });

  const [createIntent] = useMutation(CREATE_PAYMENT_INTENT, {
    onError: (err) => {
      toast({ status: 'error', title: err.message });
    },
    onCompleted: (data) => {
      setPaymentIntent(data?.createPaymentIntent?.client_secret);
    },
  });

  const [confirmPayment] = useMutation(CONFIRM_PAYMENT_ORDER, {
    onCompleted: () => {
      dispatch(emptyCart());
    },
  });

  useEffect(() => {
    const sum = cart && cart?.reduce((acc, curr) => acc + Number(curr.price) * curr.count, 0);
    setTotal(sum);
  }, [cart]);

  async function handleOrder() {
    if (!token) {
      setModal(true);
      return null;
    } else {
      await createOrder({
        variables: {
          data: {
            restaurantId: restaurantData?.findRestaurantById?._id,
            items: cart.map((el) => ({
              id: el._id,
              amount: el.count,
            })),
            mode: 'DELIVERY',
          },
        },
      });
      await createIntent({
        variables: {
          data: {
            amount: grandTotal * 100,
            currency: 'ngn',
          },
        },
      });
      togglePayment();
    }
  }

  const [paymentIntent, setPaymentIntent] = useState('');
  const [paymentStage, { toggle: togglePayment }] = useBoolean(false);

  // const getTotalPrice = () => {
  //   return cart.reduce((accumulator, item) => accumulator + item.count * item.price, 0);
  // };

  const vat = total * 0.075;
  const grandTotal = total + vat;

  return (
    <BusinessLayout>
      {/* <Nav /> */}
      <Main>
        {cart.length == 0 ? (
          <p> No items have been added to cart yet</p>
        ) : (
          <>
            <h3 className={styles.cartTextStyle}>Cart</h3>
            <Section>
              <Section1>
                {!paymentStage
                  ? cart?.map((product) => <CartItem key={product.id} product={product} />)
                  : paymentIntent && (
                      <Elements stripe={stripePromise} options={{ clientSecret: paymentIntent }}>
                        <Payment
                          amount={grandTotal}
                          bookingData={order?.createOrder}
                          confirmPayment2={confirmPayment}
                          order
                        />
                      </Elements>
                    )}
              </Section1>
              {!paymentStage && (
                <Section2>
                  <Box2>
                    <Image borderRadius={'50%'} src={cart[0].logo} width={'140px'} height={'140px'} alt="cartLogo" />
                    <div>
                      <h4>{cart[0].title}</h4>
                    </div>
                    <div>
                      <p>{cart[0]?.description}</p>
                    </div>
                  </Box2>
                  <Box2a>
                    {/* <CheckOut /> */}
                    <div>
                      <h4> Order Summary </h4>
                      <div>
                        <div className={styles.subTotal}>
                          <p className={styles.subTotalText}> Sub Total</p>
                          <h5 className={styles.h5ForSubTotal}> ₦{total} </h5>
                        </div>
                        <div className={styles.subTotal}>
                          <p className={styles.vatText}> VAT </p>
                          <h5 className={styles.h5ForSubTotal}> ₦{vat} </h5>
                        </div>
                        <Line />
                        <div className={styles.subTotal}>
                          <p className={styles.totalText}> Total </p>
                          <h5 className={styles.totalText}>₦{grandTotal}</h5>
                        </div>
                      </div>
                      <Button onClick={() => handleOrder()}> Proceed to Checkout </Button>
                    </div>
                  </Box2a>
                </Section2>
              )}
            </Section>
          </>
        )}
        <InnerSection />
        <h2> Similar Places </h2>
        <SimilarPlacesSlider />
        {/* <Influencers /> */}
      </Main>
      <LoginModal onClose={() => setModal(false)} modal={modal} />
    </BusinessLayout>
  );
};

function CartItem({ product }) {
  const [count, setCount] = useState(product.count);
  const dispatch = useDispatch();
  const cartPayload = { count: count, ...product };
  return (
    <div>
      <MenuCard key={cartPayload.id} style={{ margin: '0 auto', width: '90%', marginBottom: '20px' }}>
        <MenuCardImg src={cartPayload.logo} alt="menu" />
        <InnerContainer>
          <MenuNameContainer>
            <h3>{cartPayload.title.toLowerCase()}</h3>
            <p>{cartPayload?.description.toLowerCase()}</p>
          </MenuNameContainer>
        </InnerContainer>
        <AddedBtnContainer>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <BtnContainer style={{ marginRight: 30, marginBottom: 20 }}>
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
            <Amount>₦{count * cartPayload.price}</Amount>
          </div>
          <RemoveBtn
            style={{ position: 'static' }}
            onClick={() => {
              setCount(1);
              dispatch(removeFromCart(product.id));
            }}
          >
            <Row>
              Remove
              <MdDelete />
            </Row>
          </RemoveBtn>
        </AddedBtnContainer>
      </MenuCard>
    </div>
  );
}

export default Cart;
