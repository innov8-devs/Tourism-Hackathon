import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';

const Ul = styled.ul`
  display: flex;
  position: absolute;
  left: 76px;
  font-family: 'Arial Rounded MT';
  font-style: normal;
  justify-content: space-around;
  line-height: 100%;
  cursor: pointer;
  color: rgba(40, 40, 40, 0.63);
  opacity: 0.6;
`;

const Li = styled.li`
  font-weight: 400;
  display: flex;
  font-size: 16px;
  list-style: none;
  margin: 10px 28px 6px 0;
`;

const Container = styled.div`
  display: flex;
  max-width: 1600px;
  height: 68px;
  background: #fbfbfb;
  align-items: center;
`;

const ContainerWidth = styled.section`
  max-width: 1600px;
  height: 68px;
`;

const Box = styled.div`
  position: absolute;
  display: flex;
  width: 670px;
  height: 40px;
  right: 86px;
  align-items: center;
  padding: 0 6px;
  font-family: Montserrat;
  color: rgba(0, 32, 51, 0.35);
  background: #ffffff;
  border: 1px solid rgba(0, 66, 105, 0.28);
  box-sizing: border-box;
  border-radius: 8px;
`;

const BoxContent = styled.div`
  dispaly: flex;
  width: 700px;
  font-family: Montserrat;
  font-weight: 600px;
  height: 24px;
  // justtify-content: center;
  align-items: center;
  left: calc(50% - 700px / 2 + 249.5px);
`;

const SearchSection = () => {
  return (
    <Container>
      <ContainerWidth>
        <Ul>
          <Link href="/Restaurant">
            <Li>Restaurants</Li>
          </Link>
          {/* <Li>Events</Li> */}
          <Li>Hotels</Li>
          <Li>Attraction</Li>
          <Li>People</Li>
        </Ul>
      </ContainerWidth>
      <Box>
        <BoxContent>Search</BoxContent>
        <BiSearch size="20px" />
      </Box>
    </Container>
  );
};

export default SearchSection;
