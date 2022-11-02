//identify context
import React from 'react';

const TableContext = React.createContext({
    tableHeader: [],
    tableBody: [],
    sortFunction: (name) => {
    }
  }
);

export default TableContext;