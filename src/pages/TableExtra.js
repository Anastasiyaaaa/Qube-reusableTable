import React, {useEffect, useContext} from 'react';
import TableHeader from "../components/table/tableHeader/TableHeader";
import TableBody from "../components/table/tableBody/TableBody";
import './Table.css';
import TableContext from "../store/table-context";

const TableExtraPage = () => {
  //simple table with TableHeader and TableBody
  const tableCtx = useContext(TableContext);
  const tableColumnStructure = tableCtx.extraPage.tableColumnStructure;
  const tableData = tableCtx.extraPage.tableData;

  useEffect(() => {
    tableCtx.updateCurrentPage('extraPage');
  }, [])


  return (
    <table className='table'>
      <TableHeader tableColumnStructure={tableColumnStructure}/>
      <TableBody tableColumnStructure={tableColumnStructure} tableData={tableData}/>
    </table>
  );
};

export default TableExtraPage;