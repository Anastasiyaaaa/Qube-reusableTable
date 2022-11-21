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
//check all variant of value that we can get from db
      if (columnStructure.col_visible){
        if (Array.isArray(dataColValue) && Array.isArray(dataColSubValue)) {
          const valueCell = getValueFunction(dataColValue[0], dataColValue[1], tableDataItem);
          const subValueCell =  getValueFunction(dataColSubValue[0], dataColSubValue[1], tableDataItem);
          return totalCellValue.push([valueCell,subValueCell]);
        }
        if (Array.isArray(dataColValue) && !Array.isArray(dataColSubValue)) {
          const valueCell = getValueFunction(dataColValue[0], dataColValue[1], tableDataItem);
          return totalCellValue.push(valueCell);
        }
        if (Array.isArray(dataColSubValue) && !Array.isArray(dataColValue)) {
          const subValueCell = getValueFunction(dataColSubValue[0], dataColSubValue[1], tableDataItem);
          return totalCellValue.push(subValueCell);
        }

        if (!Array.isArray(dataColSubValue) && dataColSubValue !== null) {
          return totalCellValue.push(dataColSubValue);
        }
        if (!Array.isArray(dataColValue) && dataColValue !== null) {
          return totalCellValue.push(dataColValue || ' ');
        }
        if(dataColValue === null || dataColSubValue === null){
          return totalCellValue.push(' ');
        }

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