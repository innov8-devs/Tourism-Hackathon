import { Flex } from '@chakra-ui/react';
import { BsArrowRight } from 'react-icons/bs';
import styled from 'styled-components';

export const MainWrapper = styled.div`
  padding: 142px 0px;
  background: #ffeed9b2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CustomStyledButton = styled.button`
  background: #ff9916;
  border-radius: 8px;
  text-align: center;
  padding: 15px 20px;
  color: #fff;
  max-width: 250px;
  width: fit-content;
`;

export const Button = ({ children, onClick = () => {}, rightArrow = false }) => (
  <CustomStyledButton style={{ marginTop: '40px' }} onClick={onClick}>
    <Flex alignItems={'center'} gap={'3px'}>
      {children} {rightArrow && <BsArrowRight />}
    </Flex>
  </CustomStyledButton>
);
