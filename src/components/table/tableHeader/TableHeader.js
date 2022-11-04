import React, {useContext} from 'react';
import TableContext from "../../../store/table-context";
import TableRowHeader from "./TableRowHeader";

const TableHeader = () => {
  //here we use reusable table row and send by props data
  //different row - different data will use in the future
  const tableCtx = useContext(TableContext);

  return (
    <thead>
    <TableRowHeader items={tableCtx.tableColumnStructure}/>
    </thead>
  );
};

export default TableHeader;