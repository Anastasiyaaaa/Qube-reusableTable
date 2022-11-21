import React from 'react';
import TableRow from "./TableRow";
import getValueFunction from "../../../store/table-valueFunctions";

const TableBody = (props) => {
  //here will be our main table data
  const tableColumnStructure = props.tableColumnStructure;
  const tableData = props.tableData;

  //create new arr with labels from given DATA in order by our Structure data
  // and show label only if column in Structure is visible


  const rowsDataList = tableData.map(tableDataItem => {
    let rowDataList = [];
    tableColumnStructure.forEach(columnStructure => {
      const colValue = columnStructure.col_value;
      if (columnStructure.col_visible === true) {
        if (Array.isArray(colValue)) {
          const valueCell = getValueFunction(colValue[0], colValue[1], tableDataItem);
          rowDataList.push(valueCell);
        } else {
          rowDataList.push(colValue);
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