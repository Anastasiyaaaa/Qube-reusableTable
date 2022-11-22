import React from 'react';
import TableRow from "./TableRow";
import getValueFunction from "../../../store/table-valueFunctions";

const TableBody = (props) => {
  //here will be our main table data
  const tableColumnStructure = props.tableColumnStructure;
  const tableData = props.tableData;

  //create new arr with labels from given DATA in order by our Structure data
  // and show label only if column in Structure is visible


  // Case1: No value (null) in col_value | col_subValue
  //        In this case a blank value is returned
  //
  // Case2: 1 value is passed in col_value | col_subValue
  //        In this case returns the element from the data table
  //
  // Case3: 2 or more values in col_value | col_subValue
  //        In this case 1st value is function and remaining args to that function
  //        The function is executed and it returns a value

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

    return totalCellValue;
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