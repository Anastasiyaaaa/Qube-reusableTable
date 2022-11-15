//identify context
import React from 'react';

const TableContext = React.createContext({
    currentPage: '',
    defaultValue: {},
    mainPage: {},
    extraPage: {},
    updateCurrentPage: (page) => {},
    sortColumnFunction: (name, elementType, sortType) => {},
    hideShowColumnFunction: (name, visible) => {},
  }
);

export default TableContext;