import React, {useContext, useEffect} from 'react';
import TableContext from "../store/table-context";
import TableHeader from "../components/table/tableHeader/TableHeader";
import TableBody from "../components/table/tableBody/TableBody";
import './Table.css';

const TableMain = () => {
  //simple table with TableHeader and TableBody
  const tableCtx = useContext(TableContext);
  console.log(tableCtx)
  const tableColumnStructure = tableCtx.mainPage.tableColumnStructure;
  const tableData = tableCtx.mainPage.tableData;

  useEffect(() => {
    tableCtx.updateCurrentPage('mainPage');
  }, [])

  return (
    <table className='table'>
      <TableHeader page='mainPage' tableColumnStructure={tableColumnStructure}/>
      <TableBody tableColumnStructure={tableColumnStructure} tableData={tableData}/>
    </table>
  );
};

export default TableMain;