import React, {useContext} from 'react';
import TableRow from "./TableRow";
import TableContext from "../../store/table-context";

const TableHeader = () => {
  //here we use reusable table row and send by props data
  //different row - different data will use in the future
  const tableCtx = useContext(TableContext);

  return (
    <thead>
      <TableRow items={tableCtx.tableHeader} headerRow={true}/>
    </thead>
    );
};

export default TableHeader;