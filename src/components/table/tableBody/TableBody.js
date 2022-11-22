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
    const totalCellValue = [];
    tableColumnStructure.forEach(columnStructure => {
      const dataColValue = columnStructure.col_value;
      const dataColSubValue = columnStructure.col_subValue;
      if (columnStructure.col_visible) {
        totalCellValue.push([getValueFunction(dataColValue, tableDataItem),
          getValueFunction(dataColSubValue, tableDataItem)]);
      }
    });

    return totalCellValue
  })

  console.log(rowsDataList)
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