import React  from 'react';
import TableRowHeader from "./TableRowHeader";

const TableHeader = (props) => {

  return (
    <thead>
    <TableRowHeader items={props.tableColumnStructure}/>
    </thead>
  );
};

export default TableHeader;