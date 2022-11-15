import React, {useContext} from 'react';
import TableRow from "./TableRow";
import TableContext from "../../../store/table-context";

const TableBody = (props) => {
  //here will be our main table data
  const tableCtx = useContext(TableContext);
  const defaultValue = tableCtx.defaultValue;

  const tableColumnStructure = props.tableColumnStructure;
  const tableData = props.tableData;

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
      }else {
        if(columnStructure.col_visible === true){
          rowDataList.push(defaultValue[colName]);
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