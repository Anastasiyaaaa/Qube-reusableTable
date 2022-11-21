import React, {useContext} from 'react';
import tableContext from "../../../store/table-context";

const TableColumnHeader = (props) => {
  const tableCtx = useContext(tableContext);

  const {name, visible, label, type, width, minWidth, sort} = props;

  //use function from <TableProvider> to change the sort
  const sortItemsHandler = () => {
    //use name - as identifier for column's element
    tableCtx.sortColumnFunction(name, type, sort);
  }

  //column structure:
  const column = <td className='th_column' style={{width: `${width}%`, minWidth: `${minWidth}px`}}>
    {label}
    {/*depend on sort type show button with top or bottom arrow for Header */}
    <br/>
    {sort === 'asc' &&
      <button onClick={sortItemsHandler}>&#8593; </button>
    }
    {sort === 'dsc' &&
      <button onClick={sortItemsHandler}>&#8595; </button>
    }
  </td>;

  return (
    <>
      {visible && column}
    </>
  );
};

export default TableColumnHeader;