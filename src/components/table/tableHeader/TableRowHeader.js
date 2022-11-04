import React from 'react';
import TableColumnHeader from "./TableColumnHeader";

const TableRowHeader = (props) => {
  //send each element to column component
  const columns = props.items.map(item =>
    <TableColumnHeader
      key={item.col_name}
      name={item.col_name}
      visible={item.col_visible}
      label={item.col_label}
      type={item.col_type}
      width={item.col_width}
      sort={item.col_sort}
    />
  )

  return (
    <tr>
      {columns}
    </tr>
  );
};

export default TableRowHeader;