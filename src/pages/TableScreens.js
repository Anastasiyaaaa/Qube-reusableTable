import React, {useContext, useEffect} from 'react';
import TableContext from "../store/table-context";
import Table from "../components/table/Table";

const TableScreens = () => {
  //simple table with TableHeader and TableBody
  const tableCtx = useContext(TableContext);
  const tableColumnStructure = tableCtx.screensPage.tableColumnStructure;
  const tableData = tableCtx.screensPage.tableData;

  useEffect(() => {
    tableCtx.updateCurrentPage('screensPage');
  }, [])

  return (
    <Table
      tableColumnStructure={tableColumnStructure}
      tableData={tableData}
    />
  );
};

export default TableScreens;