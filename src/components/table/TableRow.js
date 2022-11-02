import React from 'react';
import TableColumn from "./TableColumn";

const TableRow = (props) => {
  //checking is it row for table's header or body
  const checkHeadRow = !!props.headerRow;
  //send each element to column component
  const columns = props.items.map( item =>
    <TableColumn
      key={item.col_name}
      name={item.col_name}
      visible={item.col_visible}
      label={item.col_label}
      type={item.col_type}
      width={item.col_width}
      sort={item.col_sort}
      sortType={item.col_sort_type}
      headerRow={checkHeadRow}
    />
  )
  return (
    <tr>
      {columns}
    </tr>
    );
};

export default TableRow;