import styled from 'styled-components';

export const TopHeading = styled.h1`
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  color: #0f264c;
  margin: 0 0 30px 0;
`;

export const PrefContainer = styled.div`
  padding: 10px 20px;
  margin: 50px auto 50px auto;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  align-items: center;

  @media (max-width: 500px) {
    padding: 10px 0;
    margin: 0;
  }
`;

export const CheckBoxContainer = styled.div`
  margin: 0 auto 30px auto;
`;

export const CheckSearch = styled.select`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #0f264c;
  cursor: pointer;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background: #ffffff;
  border: 1px solid rgba(0, 66, 105, 0.28);
  box-sizing: border-box;
  border-radius: 8px;
  font-weight: 500;
  background-image: url('/chevron-down.png');
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: 97%;
  transition: 0.3s;

  &:hover {
    border: 1px solid #ff9916;
  }

  &:focus {
    outline: none;
    background-image: none;
    border: 1px solid #ff9916;
  }
`;

export const Title = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 16px;

  /* Secondary Color */

  color: #0f264c;
`;
