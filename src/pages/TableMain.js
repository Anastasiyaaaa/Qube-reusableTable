import React, {useContext} from 'react';
import TableContext from "../store/table-context";
import TableHeader from "../components/table/tableHeader/TableHeader";
import TableBody from "../components/table/tableBody/TableBody";
import './Table.css';

const TableMain = () => {
  //simple table with TableHeader and TableBody
  const tableCtx = useContext(TableContext);
  const tableColumnStructure = tableCtx.tableColumnStructure;
  const tableData = tableCtx.tableData;

  return (
    <table className='table'>
      <TableHeader tableColumnStructure={tableColumnStructure}/>
      <TableBody tableColumnStructure={tableColumnStructure} tableData={tableData}/>
    </table>
  );
};

export default TableMain;