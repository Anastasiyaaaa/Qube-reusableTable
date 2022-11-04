//identify context
import React from 'react';

const TableContext = React.createContext({
    tableColumnStructure: [],
    tableData: [],
    sortColumnFunction: (name, elementType, sortType) => {},
    hideShowColumnFunction: (name, visible) => {},
  }
);

export default TableContext;