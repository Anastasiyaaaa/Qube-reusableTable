// it's table provider component, here I manage the current context
// to data and provide the context to all components that have access

// In this component I get current clicked element(column) that wanna be sorted ->
// -> I find this element in our data array and change sort type for it ->
// -> return updated array (column array)

import {useReducer} from 'react';
import TableContext from './table-context';
import {defaultTableState} from "../api/data";


const toggleColumnFunction = (state, action, column, case1, case2) => {
  return state[state.currentPage].tableColumnStructure.map(item => {
    //get element that was clicked for updating sort type
    if (item.col_name === action.name) {
      //change asc to dsc and vice versa
      const newColumnValue = item[column] === case1 ? case2 : case1 ;
      //return element with new sort type
      return {...item, [column]: newColumnValue}
    }
    return item
  });
};

const tableReducer = (state, action) => {
  if (action.type === 'SORT') {
    const updatedTableColumnStructure =
      toggleColumnFunction(state, action, 'col_sort', 'asc', 'dsc');
    //return updating array of elements

    return {
      ...state,
      [state.currentPage]: {
        tableColumnStructure: updatedTableColumnStructure,
        tableData: state[state.currentPage].tableData
      },
    };
  }
  if (action.type === 'VISIBLE') {
    const updatedTableColumnStructure =
      toggleColumnFunction(state, action, 'col_visible', true, false);
    return {
      ...state,
      [state.currentPage]: {
        tableColumnStructure: updatedTableColumnStructure,
        tableData: state[state.currentPage].tableData
      },
    };
  }
  if (action.type === 'UPDPAGE') {
    return {
      ...state,
      currentPage: action.page,
    };
  }
    return defaultTableState;
};

const TableProvider = (props) => {
  const [tableState, dispatchTableAction] = useReducer(
    tableReducer,
    defaultTableState
  );

  //function that update sort
  const sortItemInColum = (name, type, sort) => {
    dispatchTableAction({type: 'SORT', name: name, elementType: type, sortType: sort});
  };
  const hideShowColumn = (name, visible) => {
    dispatchTableAction({type: 'VISIBLE', name: name, visible: visible});
  };
  const updateCurrentPage = (page) => {
    dispatchTableAction({type: 'UPDPAGE', page: page});
  };

  //our context that updated by event
  const tableContext = {
    currentPage: tableState.currentPage,
    ordersPage: tableState.ordersPage,
    schedulesPage: tableState.schedulesPage,
    screensPage: tableState.screensPage,
    showPage: tableState.showPage,
    updateCurrentPage: updateCurrentPage,
    sortColumnFunction: sortItemInColum,
    hideShowColumnFunction: hideShowColumn,
  }

  return (
    //all components inside TableProvider hav access to the context
    <TableContext.Provider value={tableContext}>
      {props.children}
    </TableContext.Provider>
  );
};

export default TableProvider;
