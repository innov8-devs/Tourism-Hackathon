import styled from 'styled-components';

const ErrorContainer = styled.div`
  max-width: 460px;
  margin: 10px auto;
  border: 1px solid;
  padding: 15px 10px 15px 50px;
  background-position: 10px center;
  color: #d8000c;
  background-color: #ffbaba;
  background-image: url('https://i.imgur.com/GnyDvKN.png');
  background-repeat: no-repeat;
`;

const ErrorDisplay = ({ children }) => {
  return <ErrorContainer>{children}</ErrorContainer>;
};

export default ErrorDisplay;
