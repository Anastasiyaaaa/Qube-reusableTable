import React from 'react';

const TableColumn = (props) => {
  let columnValue;

  if (props.subLabel.trim().length >= 1) {
    columnValue =
      <td className='innerColumnRow'>
        <div>{props.label}</div>
        <div>{props.subLabel}</div>
      </td>;
  } else {
    columnValue = <td> {props.label} </td>;
  }

  return columnValue
}


export default TableColumn;