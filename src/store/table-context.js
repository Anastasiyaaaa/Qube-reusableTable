//identify context
import React from 'react';

const TableContext = React.createContext({
    currentPage: '',
    ordersPage: {},
    schedulesPage: {},
    screensPage: {},
    showPage: {},
    updateCurrentPage: (page) => {},
    sortColumnFunction: (name, elementType, sortType) => {},
    hideShowColumnFunction: (name, visible) => {},
  }
);

export default TableContext;