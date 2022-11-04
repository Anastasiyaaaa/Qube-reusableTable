import React, {useContext} from 'react';
import TableContext from "../../../store/table-context";
import TableRowHeader from "./TableRowHeader";

const TableHeader = (props) => {

  return (
    <thead>
    <TableRowHeader items={props.tableColumnStructure}/>
    </thead>
  );
};

export default TableHeader;