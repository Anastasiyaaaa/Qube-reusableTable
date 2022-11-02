import React, {useContext} from 'react';
import TableRow from "./TableRow";
import TableContext from "../../store/table-context";

const TableBody = () => {
  //here will be our main table data
  const tableBodyCtx = useContext(TableContext);
  const row = tableBodyCtx.tableBody.map((row, i) =>
    <TableRow key={row[i].col_name} items={row}/>
  );

  return (
    <tbody>
      {row}
    </tbody>
  );
};

export default TableBody;