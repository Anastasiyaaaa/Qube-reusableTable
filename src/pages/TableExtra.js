import React, {useEffect, useContext} from 'react';
import TableContext from "../store/table-context";
import Table from "../components/table/Table";

const TableExtraPage = () => {
  //simple table with TableHeader and TableBody
  const tableCtx = useContext(TableContext);
  const tableColumnStructure = tableCtx.extraPage.tableColumnStructure;
  const tableData = tableCtx.extraPage.tableData;

  useEffect(() => {
    tableCtx.updateCurrentPage('extraPage');
  }, [])


  return (
    <Table
      tableColumnStructure={tableColumnStructure}
      tableData={tableData}
    />
  );
};

export default TableExtraPage;