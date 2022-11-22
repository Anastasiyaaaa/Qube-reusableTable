import React from 'react';

const TableColumn = (props) => {
  let columnValue;

  if (props.subLabel.trim().length >= 1) {
    columnValue =
      <td className='innerColumnRow'>
        <tr>
          <td>{props.label}</td>
        </tr>
        <tr>
          <td>{props.subLabel}</td>
        </tr>
      </td>;
  } else {
    columnValue = <td> {props.label} </td>;
  }

  return columnValue
}


export default TableColumn;