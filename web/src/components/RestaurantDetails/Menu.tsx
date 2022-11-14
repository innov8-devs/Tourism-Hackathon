//@ts-nocheck
import React, { useEffect, useState } from 'react';

import { gql, useQuery } from '@apollo/client';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Center,
  Flex,
  Input,
  Text,
  useBoolean,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
// import { useRouter } from 'next/router';
import Link from 'next/link';
// import router from 'next/router';
import { BiCart, BiSearch, BiX } from 'react-icons/bi';
import { MdDelete, MdOutlineRateReview } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart, removeFromCart } from '../../redux/cartRedux';
import Button from '../Button';
import { AUTH_TOKEN } from '../constants';
import None from '../Global/None';
import MenuSkeleton from '../Skeleton/MenuSkeleton';

import LoginModal from './LoginModal';
import {
  AddBtn,
  AddedBtnContainer,
  Amount,
  BtnContainer,
  Container,
  Counter,
  // CreateOrderButton,
  Dropdown,
  InnerContainer,
  MenuCard,
  MenuCardImg,
  MenuContainer,
  MenuNameContainer,
  RemoveBtn,
  SelectMode,
  SubtractBtn,
} from './menu-styles';
import { Row } from './restaurantabout-styles';
import ReviewModal from './ReviewModal';

const RESTAURANT_MENU_QUERY = gql`
  query findMenu($data: QueryMenuInput) {
    findMenu(data: $data) {
      _id
      restaurantId
      available
      title
      description
      price
      logo
      category {
        name
      }
    }
  }
`;

const RESTAURANT_MENU_CATEGORIES = gql`
  query GetRestaurantMenuCategories($restaurantId: ID!) {
    getRestaurantMenuCategories(restaurantId: $restaurantId) {
      _id
      name
      image
      description
    }
  }
`;

const Menu = ({ menuData }) => {
  const toast = useToast();
  const [selectCategory, setSelectCategory] = useState('');
  const [term, setTerm] = useState('');
  const [searchBar, { toggle: toggleSearchBar }] = useBoolean(false);
  const cart = useSelector((state) => state.cart);
  const { loading, error, data } = useQuery(RESTAURANT_MENU_QUERY, {
    variables: {
      data: {
        restaurantId: menuData?.findRestaurantById._id,
      },
    },
  });
  const [visibleData, setVisibleData] = useState([]);
  const { data: categoryData } = useQuery(RESTAURANT_MENU_CATEGORIES, {
    variables: {
      restaurantId: menuData?.findRestaurantById._id,
    },
  });
  const filteredMenu =
    selectCategory !== '' ? data?.findMenu.filter((item) => item?.category?.name === selectCategory) : data?.findMenu;

  useEffect(() => {
    setVisibleData(filteredMenu || []);
  }, [filteredMenu]);

  useEffect(() => {
    setVisibleData(data?.findMenu?.filter((el) => el.title?.toLowerCase().indexOf(term?.toLowerCase()) !== -1));
  }, [term, data]);

  const handleSelectCategory = (e) => {
    setSelectCategory(e.target.value);
  };

  if (loading) return <MenuSkeleton />;
  if (error) return <MenuSkeleton />;

  return (
    <Container>
      <Dropdown>
        <Flex
          justifyContent={'space-between'}
          style={{ height: '50px' }}
          alignItems={'center'}
          paddingRight={'10'}
          w={'100%'}
        >
          {!searchBar && (
            <SelectMode onChange={(e) => handleSelectCategory(e)} name="select">
              <option value="" selected>
                Select Category from below
              </option>
              {categoryData?.getRestaurantMenuCategories?.map((category) => (
                <option value={category?.name} key={category?._id}>
                  {category?.name}
                </option>
              ))}
            </SelectMode>
          )}
          <Flex gap={10} justifyContent={'flex-end'} w={'100%'}>
            {cart.length > 0 && !searchBar && (
              <Link href={/*`${router?.query._id}/cart`*/ '#'} passHref>
                <Box
                  onClick={() => {
                    toast({ status: 'error', title: 'You cant order from an unclaimed restaurant' });
                  }}
                  pos={'relative'}
                >
                  <BiCart cursor={'pointer'} size={24} />
                  <Box
                    pos={'absolute'}
                    top={-1}
                    right={-1}
                    w={3.5}
                    h={3.5}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    bg={'red'}
                    borderRadius={'50%'}
                  >
                    <Text fontSize={12} fontWeight={'bold'} color={'white'}>
                      {cart.length >= 10 ? '9+' : cart.length}
                    </Text>
                  </Box>
                </Box>
              </Link>
            )}
            <BiSearch opacity={searchBar ? 0 : 1} size={24} onClick={toggleSearchBar} />
            <Flex
              display={searchBar ? 'flex' : 'none'}
              border={'1px solid #ccc'}
              pl={3}
              pr={3}
              borderRadius={100}
              alignItems={'center'}
              flex={1}
            >
              <BiSearch size={24} />
              <Input
                onChange={(e) => setTerm(e.target.value)}
                padding={'10px'}
                variant={'unstyled'}
                placeholder="Search Menu"
                flex={1}
                value={term}
              />
              <BiX size={24} onClick={() => (term !== '' ? setTerm('') : toggleSearchBar())} />
            </Flex>
          </Flex>
        </Flex>

        {/* <SelectMode name="select">
          <option value="valor1" selected>
            Cuisine
          </option>
          <option value="valor2">Cuisine</option>
          <option value="valor3">Cuisine</option>
        </SelectMode> */}
      </Dropdown>
      {visibleData?.length > 0 ? (
        <MenuContainer>
          {visibleData?.map((item) => (
            <MenuCardItems key={item.id} product={item} />
          ))}
          {visibleData?.length === 0 && (
            <Center>
              <Alert
                status="warning"
                variant="subtle"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                height="200px"
                w="450px"
              >
                <AlertIcon boxSize="40px" mr={0} />
                <AlertTitle mt={4} mb={1} fontSize="lg">
                  No Menu Found for category {selectCategory}
                </AlertTitle>
                <AlertDescription maxWidth="sm"> Please try another category </AlertDescription>
              </Alert>
            </Center>
          )}
        </MenuContainer>
      ) : (
        <div>
          <None name="Menu is not available at the moment Please check back later..." />
        </div>
      )}
    </Container>
  );
};

const MenuCardItems = ({ product }) => {
  const [added, setAdded] = useState(false);
  const [count, setCount] = useState(1);
  const [loginModal, setModal] = useState(false);
  const authToken = localStorage.getItem(AUTH_TOKEN);
  const { isOpen, onClose, onToggle } = useDisclosure();
  const dispatch = useDispatch();
  const cartPayload = { ...product, count: count };

  return (
    <div>
      <MenuCard key={cartPayload.id}>
        <MenuCardImg src={cartPayload.logo || '/images/menuPlaceholder.jpg'} alt="menu" />
        <InnerContainer>
          <MenuNameContainer>
            <h3>{cartPayload.title.toLowerCase()}</h3>
            <p>{cartPayload?.description.toLowerCase()}</p>
            <Flex
              cursor={'pointer'}
              onClick={() => {
                if (authToken) onToggle();
                else setModal(true);
              }}
              alignItems={'center'}
              mt={5}
            >
              <Flex alignItems={'center'}>
                <MdOutlineRateReview color={'#ff9916'} size={24} style={{ marginRight: 5 }} />
                <Text color={'#ff9916'} fontSize={{ base: 12, md: 14 }}>
                  Review Menu Item
                </Text>
              </Flex>
            </Flex>
          </MenuNameContainer>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <BtnContainer>
              <SubtractBtn disabled={count > 1 ? false : true} onClick={() => setCount(count - 1)}>
                -
              </SubtractBtn>
              <Counter>{count}</Counter>
              <AddBtn onClick={() => setCount(count + 1)}>+</AddBtn>
            </BtnContainer>
            <Amount>₦{count * cartPayload.price}</Amount>
          </div>
        </InnerContainer>
        <AddedBtnContainer>
          <Button
            style={{ width: '70px' }}
            disabled={added}
            smallest
            onClick={() => {
              setAdded(true);
              dispatch(addItemToCart(cartPayload));
            }}
          >
            {added ? 'Added' : 'Add +'}
          </Button>
          {added && (
            <RemoveBtn
              onClick={() => {
                setAdded(false), setCount(1);
                dispatch(removeFromCart(product.id));
              }}
            >
              <Row>
                Remove
                <MdDelete />
              </Row>
            </RemoveBtn>
          )}
        </AddedBtnContainer>
      </MenuCard>
      <ReviewModal item={product._id} isOpen={isOpen} onClose={onClose} restaurantId={product?.restaurantId} />
      <LoginModal onClose={() => setModal(false)} modal={loginModal} />
    </div>
  );
};

export default Menu;
