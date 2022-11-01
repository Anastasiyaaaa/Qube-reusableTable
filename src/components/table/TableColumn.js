import React, {useContext} from 'react';
import tableContext from "../../store/table-context";

const TableColumn = (props) => {
  const tableCtx = useContext(tableContext);
  const {name, visible, label, type, width, sort, sortType} = props;

  //use function from <TableProvider> to change the sort
  const sortItemsHandler = () => {
    //use name - as identifier for column's element
    tableCtx.sortFunction(name);
  }

  //column structure:
  const column = <td className='th_column' style={{width: `${width}%`}}>
    {label}
    {/*depend on sort type show button with top or bottom arrow*/}
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