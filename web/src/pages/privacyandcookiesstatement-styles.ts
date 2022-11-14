import styled from 'styled-components';

export const Hero = styled.div`
  width: 100%;
  height: 390px;
  margin: 0 auto;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Wrapper = styled.section`
  background: rgba(255, 153, 22, 0.03);
  margin: 0 20px;
  @media (max-width: 800px) {
    margin: 0;
  }
`;

export const MainWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 30px auto;
  padding: 20px 0 40px 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const BodyWrapper = styled.div`
  padding: 0 20px;
  text-align: center;
  width: 75%;
  height: 100vh;
  overflow: scroll;
  scroll-behavior: smooth;
  margin-right: 50px;
  @media (max-width: 800px) {
    width: 100%;
    margin-right: 0;
    padding: 0 20px;
  }
`;

export const Right = styled.div`
  width: 10%;
  @media (max-width: 800px) {
    width: 100%;
    margin: 0;
    text-align: center;
  }
  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #212121;
  }
`;

export const BodyHeader = styled.h1`
  font-family: DM Serif Display;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  text-transform: uppercase;
  text-align: center;
  line-height: 100%;
  color: #343434;

  @media (max-width: 900px) {
    text-align: center !important;
  }

  margin: 30px 0 0px 0;

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

export const Typography = styled.p`
  font-style: normal;
  font-weight: normal;
  word-wrap: break-word;
  font-size: 16px;
  line-height: 170%;
  color: #000000;
  text-align: left !important;
  margin: 0 0 42px 0;
`;

export const DownloadContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0 0 16px 0;
  @media (max-width: 800px) {
    justify-content: center;
  }
  p {
    font-family: DM Serif Display;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #0055ff;
    margin: 0;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  th,
  td {
    border: 1px solid #dddddd;
    textalign: left;
    padding: 8px;
  }
`;
