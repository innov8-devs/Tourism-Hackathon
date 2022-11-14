import { MainNav, MainWrapper, NavButton, NavSearch, NavWrapper } from './nav-styles';

const Nav = () => {
  return (
    <MainNav>
      <MainWrapper>
        <NavWrapper>
          <NavButton href="/restaurantDetails">Restaurants</NavButton>
          <NavButton href="/discover">Events</NavButton>
          {/* <NavButton href="/about">Hotels</NavButton> */}
          {/* <NavButton href="/route">Attraction</NavButton> */}
          <NavButton href="/route">People</NavButton>
        </NavWrapper>
        <NavSearch type="text" placeholder="Search i.e resort, pizza spot, movie theater" name="search" />
      </MainWrapper>
    </MainNav>
  );
};

export default Nav;
