import styled from 'styled-components';

export const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto 0 auto;
  overflow: visible;
`;

export const CategoryHeaderTag = styled.div`
  width: 15vw;
  padding: 5px;
  background: #ff9916;
  color: #fff;
  margin-bottom: 20px;
`;

export const BlogTitle = styled.h1`
  font-family: 'DM Serif Display';
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 124%;
  /* or 74px */

  text-transform: capitalize;
  width: 60%;
  color: #ffffff;
  margin-bottom: 30px;
`;

export const ReadMoreButton = styled.button`
  padding: 15px;
  color: #fff;
  background: #ff9916;
  border-radius: 8px;
  width: 15vw;
`;

export const Categories = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(149, 157, 165, 0.2);
  border-radius: 5px;
  padding: 35px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CategoryText = styled.p`
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  color: #000000;
  margin: 0 10px;
  color: #666670;
`;

export const SectionText = styled.h1`
  font-family: 'DM Serif Display';
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 100%;
  /* or 50px */

  display: flex;
  align-items: center;
  text-transform: capitalize;

  /* Black1 */

  color: #091c2e;
  margin-bottom: 50px;
`;

export const SectionBlogs = styled.div`
  display: flex;
  width: fit-content;
  gap: 5;
`;
