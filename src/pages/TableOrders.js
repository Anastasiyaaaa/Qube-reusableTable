import React, {useContext, useEffect} from 'react';
import TableContext from "../store/table-context";
import Table from "../components/table/Table";

const TableOrders = () => {
  //simple table with TableHeader and TableBody
  const tableCtx = useContext(TableContext);
  const tableColumnStructure = tableCtx.ordersPage.tableColumnStructure;
  const tableData = tableCtx.ordersPage.tableData;

  useEffect(() => {
    tableCtx.updateCurrentPage('ordersPage');
  }, [])

  return (
    <Table
      tableColumnStructure={tableColumnStructure}
      tableData={tableData}
    />
  );
};

export default TableOrders;