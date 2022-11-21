import React, {useEffect, useContext} from 'react';
import TableContext from "../store/table-context";
import Table from "../components/table/Table";

const TableSchedules = () => {
  //simple table with TableHeader and TableBody
  const tableCtx = useContext(TableContext);
  const tableColumnStructure = tableCtx.schedulesPage.tableColumnStructure;
  const tableData = tableCtx.schedulesPage.tableData;

  useEffect(() => {
    tableCtx.updateCurrentPage('schedulesPage');
  }, [])


  return (
    <Table
      tableColumnStructure={tableColumnStructure}
      tableData={tableData}
    />
  );
};

export default TableSchedules;