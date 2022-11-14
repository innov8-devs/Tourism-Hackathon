import React from 'react';

type Props = {
  showHeader: boolean;
  handleShowHeader: Function;
};

const HeaderSearchContext = React.createContext<Props>({
  showHeader: false,
  handleShowHeader: () => {},
});

export default HeaderSearchContext;
