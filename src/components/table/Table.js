import React from 'react';
import TableHeader from "./tableHeader/TableHeader";
import TableBody from "./tableBody/TableBody";
import './Table.css';

const Table = () => {
  //simple table with TableHeader and TableBody
  return (
    <table className='table'>
      <TableHeader/>
      <TableBody/>
    </table>
  );
};

export default Table;