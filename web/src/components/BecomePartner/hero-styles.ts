import styled from 'styled-components';

export const Typography = styled.p<{ size: 'md' | 'sm'; bold?: boolean }>`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  font-size: ${(props) => (props.size == 'md' ? '20px' : '16px')};
  @media screen and (max-width: 990px) {
    font-size: ${(props) => (props.size == 'sm' ? '14px' : '18px')};
  }
  @media screen and (max-width: 780px) {
    font-size: ${(props) => (props.size == 'sm' ? '12px' : '16px')};
  }
`;

export const Header = styled.h1<{ size: 'md' | 'sm' | 'lg' }>`
  font-family: 'DM Serif Display';
  font-weight: 400;
  line-height: 130%;
  font-size: ${(props) => (props.size == 'sm' ? '48px' : props.size == 'md' ? '52px' : '64px')};
  margin-bottom: 36px;
  @media screen and (max-width: 990px) {
    font-size: ${(props) => (props.size == 'sm' ? '36px' : props.size == 'md' ? '48px' : '52px')};
  }
  @media screen and (max-width: 780px) {
    font-size: ${(props) => (props.size == 'sm' ? '24px' : props.size == 'md' ? '36px' : '48px')};
  }
`;

export const Container = styled.div<{ img?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: 800px) {
    display: ${(props) => (props.img ? 'none' : 'flex')};
  }
`;
