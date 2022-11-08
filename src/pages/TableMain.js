import React, {useContext, useEffect} from 'react';
import TableContext from "../store/table-context";
import Table from "../components/table/Table";

const TableMain = () => {
  //simple table with TableHeader and TableBody
  const tableCtx = useContext(TableContext);
  const tableColumnStructure = tableCtx.mainPage.tableColumnStructure;
  const tableData = tableCtx.mainPage.tableData;

  useEffect(() => {
    tableCtx.updateCurrentPage('mainPage');
  }, [])

  return (
    <Table
      tableColumnStructure={tableColumnStructure}
      tableData={tableData}
    />
  );
};

export default TableMain;