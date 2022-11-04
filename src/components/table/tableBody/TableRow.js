import React from 'react';

import TableColumn from "./TableColumn";

const TableRow = (props) => {
  //send each element to column component
  const columns = props.row.map((item, i) =>
    <TableColumn
      key={i}
      label={item}
    />
  )
  return (
    <tr>
      {columns}
    </tr>
  );
};

export default TableRow;