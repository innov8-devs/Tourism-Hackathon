import Clock from './Clock';
import { MainWrapper } from './nav-styles';
import { NavTitle, TopNav } from './topheader-styles';

const TopHeader = () => {
  const deadline = 'march, 31, 2022';

  return (
    <TopNav>
      <MainWrapper>
        <NavTitle>HIGHTABLE NOTICE: We go live in</NavTitle>
        <Clock deadline={deadline} />
      </MainWrapper>
    </TopNav>
  );
};

export default TopHeader;
