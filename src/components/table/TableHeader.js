import React, {useContext} from 'react';
import TableRow from "./TableRow";
import TableContext from "../../store/table-context";

const TableHeader = () => {
  const tableCtx = useContext(TableContext);

  return (
    <thead>
      <TableRow items={tableCtx.tableHeader}/>
    </thead>
    );
};

export default TableHeader;