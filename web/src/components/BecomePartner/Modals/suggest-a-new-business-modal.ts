import { Text } from '@chakra-ui/react';
import styled from 'styled-components';

export const Logo = styled.img`
  z-index: 10;
`;

export const Header = styled(Text)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 150%;
  /* identical to box height, or 42px */

  /* Text */

  color: #333333;

  flex: 1;
  text-align: center;
`;
