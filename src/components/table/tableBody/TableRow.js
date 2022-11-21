import React from 'react';

import TableColumn from "./TableColumn";

const TableRow = (props) => {
  //send each element to column component
  const columns = props.row.map((item, i) => {
      if (Array.isArray(i)) {
        return <TableColumn
          key={i}
          label={item[0]}
          subLabel={item[1]}
        />
      }else{
        return <TableColumn
          key={i}
          label={item}
        />
      }
    }
  )
  return (
    <tr>
      {columns}
    </tr>
  );
};

export default TableRow;