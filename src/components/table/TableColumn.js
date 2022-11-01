import React, {useContext} from 'react';
import tableContext from "../../store/table-context";

const TableColumn = (props) => {
  const {name, visible, label, type, width, sort, sortType} = props;

  const tableCtx = useContext(tableContext);

  const sortItemsHandler = (e) => {
    e.preventDefault();
    tableCtx.sortFunction(name);
  }

  const columnClassName = sort ? 'th_column th_column_sorted': 'th_column';
  const column = <td className={columnClassName} style={{width: `${width}%`}}>
    {label}
    {sort && sortType === 'asc' && <button onClick={sortItemsHandler}>&#8593;</button>}
    {sort && sortType === 'dsc' && <button onClick={sortItemsHandler}>&#8595;</button>}
  </td>;

  return (
    <>
      {visible && column}
    </>
    );
};

export default TableColumn;