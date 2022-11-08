import React from 'react';
import TableHeader from "./tableHeader/TableHeader";
import TableBody from "./tableBody/TableBody";
import './Table.css'


const Table = (props) => {
  return (
    <table className='table'>
      <TableHeader tableColumnStructure={props.tableColumnStructure}/>
      <TableBody tableColumnStructure={props.tableColumnStructure} tableData={props.tableData}/>
    </table>
  );
};

export default Table;