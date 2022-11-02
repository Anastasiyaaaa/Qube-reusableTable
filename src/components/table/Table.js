import React from 'react';
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
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