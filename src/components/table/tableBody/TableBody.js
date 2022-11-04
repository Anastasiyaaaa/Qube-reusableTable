import React, {useContext} from 'react';
import TableRow from "./TableRow";
import tableContext from "../../../store/table-context";

const TableBody = () => {
  //here will be our main table data
  const tableCtx = useContext(tableContext);
  const tableColumnStructure = tableCtx.tableColumnStructure;
  const tableData = tableCtx.tableData;

  //create new arr with labels from given DATA in order by our Structure data
  // and show label only if column in Structure is visible
  const rowsDataList = tableData.map(tableDataItem => {
    let rowDataList = [];
    tableColumnStructure.forEach(columnStructure => {
      const colName = columnStructure.col_name;
      if (`${colName}` in tableDataItem){
        if(columnStructure.col_visible === true){
          rowDataList.push(tableDataItem[colName]);
        }
      }
    });
    return rowDataList
  })

  const rows = rowsDataList.map((row, i) =>
    <TableRow key={row[i]} row={row}/>
  );

  return (
    <tbody>
    {rows}
    </tbody>
  );
};

export default TableBody;