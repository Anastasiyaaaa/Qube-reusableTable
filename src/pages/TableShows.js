import React, {useContext, useEffect} from 'react';
import TableContext from "../store/table-context";
import Table from "../components/table/Table";

const TableShows = () => {
  //simple table with TableHeader and TableBody
  const tableCtx = useContext(TableContext);
  const tableColumnStructure = tableCtx.showPage.tableColumnStructure;
  const tableData = tableCtx.showPage.tableData;

  useEffect(() => {
    tableCtx.updateCurrentPage('showPage');
  }, [])

  return (
    <Table
      tableColumnStructure={tableColumnStructure}
      tableData={tableData}
    />
  );
};

export default TableShows;