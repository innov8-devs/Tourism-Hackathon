import styled from 'styled-components';

export const Button = styled.button<{ made?: boolean }>`
  /* Primary Color- Orange */
  color: #fff;
  background: #ff9916;
  border-radius: 8px;
  padding: 10px;
  width: fit-content;
`;

export const FormErrorMessage = styled.p`
  color: red;
`;
