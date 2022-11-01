import React from 'react';

const TableContext = React.createContext({
    tableHeader : [],
    sortFunction: (name) => {}
  }
);

export default TableContext;