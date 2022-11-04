//identify context
import React from 'react';

const TableContext = React.createContext({
    tableColumnStructure: [],
    tableColumnStructureExtra: [],
    tableData: [],
    tableDataExtra: [],
    sortColumnFunction: (name, elementType, sortType) => {},
    hideShowColumnFunction: (name, visible) => {},
  }
);

export default TableContext;