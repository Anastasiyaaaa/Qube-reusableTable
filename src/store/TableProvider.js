// it's table provider component, here I manage the current context
// to data and provide the context to all components that have access

// In this component I get current clicked element(column) that wanna be sorted ->
// -> I find this element in our data array and change sort type for it ->
// -> return updated array (column array)

import { useReducer } from 'react';
import TableContext from './table-context';
import {defaultTableState} from "../api/data";

const sortTableHeaderFunction = (state, action) => {
  const tableHeaderData = state.tableHeader.map(item => {
    //get element that was clicked for updating sort type
    if (item.col_name === action.name){
      //change asc to dsc and vice versa
      const newSortType = item.col_sort_type === 'asc' ? 'dsc' : 'asc';
      //return element with new sort type
      return {...item, col_sort_type : newSortType}
    }
    return item
  })
  return tableHeaderData
};

const sortStringDsc = (data) => {
  const updData = data.sort((a, b) => {
    return a.label.toLowerCase() >= b.label.toLowerCase()
      ? 1
      : -1
  })
  return updData;
}
const sortStringAsc = (data) => {
  const updData = data.sort((a, b) => {
    return a.label.toLowerCase() >= b.label.toLowerCase()
      ? -1
      : 1
  })
  return updData;
}
const sortDataAsc = (data) => {
  const updData = data.sort((a, b) => {
    return a.label.localeCompare(b.label);
  })
  return updData;
}
const sortDataDsc = (data) => {
  const updData = data.sort((a, b) => {
    return b.label.localeCompare(a.label);
  })
  return updData;
}
const sortTableBodyFunction = (state, action) => {
  let dataForSort = [];
  //create temp array with label by clicked column for sort
  state.tableBody.forEach((item, i) => {
    //find needed column in row by col_name that was clicked in theader
    const labelArray = item.find(item => item.col_name === action.name)
    //added to new arr for sort each label from column label and current index
    dataForSort.push({label: labelArray.col_label, indexInCurrentData: i})
  })

  //array with sorted column's label + index of this element in our current dataTable
  let sortedColumnData;

  //sort data depending on type
  if (action.elementType === 'string' && action.sortType === 'dsc') {
    sortedColumnData = sortStringDsc(dataForSort);
  }
  if (action.elementType === 'string' && action.sortType === 'asc') {
    sortedColumnData = sortStringAsc(dataForSort);
  }
  if ( action.sortType === 'asc') {
    sortedColumnData = sortDataAsc(dataForSort);
  }
  if (action.sortType === 'dsc') {
    sortedColumnData = sortDataDsc(dataForSort);
  }
  console.log(sortedColumnData)
  //update order
  let updTableBody = []
  sortedColumnData.forEach((item, index) => {
    //we know, that arr sortedColumnData - return sorted list with label and
    //with indexInCurrentData, so we can rewrite current global data array in another order
    //one by one add row in correct oder to the new array
    updTableBody[index] = state.tableBody[item.indexInCurrentData];
  })

  return updTableBody
}

const tableReducer = (state, action) => {
  if (action.type === 'SORT_DSC') {
    const updatedTableHeaderData = sortTableHeaderFunction(state, action);
    const updatedTableBodyData = sortTableBodyFunction(state, action);
    //return updating array of elements
    return {
      tableHeader: updatedTableHeaderData,
      tableBody: updatedTableBodyData
      // updArr
    };
  }
  return defaultTableState;
};

const TableProvider = (props) => {
  const [tableState, dispatchSortAction] = useReducer(
    tableReducer,
    defaultTableState
  );

  //function that update sort
  const sortItemInColum = (name, type, sortType) => {
    dispatchSortAction({ type: 'SORT_DSC', name: name, elementType: type, sortType:  sortType});
  };

  //our context that updated by event
  const tableContext = {
    tableHeader: tableState.tableHeader,
    tableBody: tableState.tableBody,
    sortFunction: sortItemInColum,

  }

  return (
    //all components inside TableProvider hav access to the context
    <TableContext.Provider value={tableContext}>
      {props.children}
    </TableContext.Provider>
  );
};

export default TableProvider;
