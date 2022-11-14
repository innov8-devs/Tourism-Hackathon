import styled from 'styled-components';

export const Header = styled.h1``;

export const HeaderText = styled.p<{ size: 'md' | 'sm'; bold?: boolean }>`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${(props) => (props.bold ? 600 : 300)};
  font-size: ${(props) => (props.size == 'md' ? '16px' : '12px')};
  opacity: ${(props) => (props.bold ? 1 : 0.5)};
  @media screen and (max-width: 990px) {
    font-size: ${(props) => (props.size == 'sm' ? '14px' : '18px')};
  }
  @media screen and (max-width: 780px) {
    font-size: ${(props) => (props.size == 'sm' ? '12px' : '16px')};
  }
`;

export const Typography = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;
