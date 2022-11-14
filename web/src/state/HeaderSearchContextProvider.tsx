import React from 'react';

import HeaderSearchContext from './HeaderSearchContext';

type Props = {
  children: React.ReactNode;
};

const HeaderSearchStateProvider: React.FC<Props> = ({ children }) => {
  const [search, setSearch] = React.useState(false);

  const headerSearchContext = {
    showHeader: search,
    handleShowHeader: setSearch,
  };

  return <HeaderSearchContext.Provider value={headerSearchContext}>{children}</HeaderSearchContext.Provider>;
};

export default HeaderSearchStateProvider;
