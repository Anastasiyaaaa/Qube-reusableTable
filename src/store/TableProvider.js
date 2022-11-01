// it's table provider component, here I manage the current context
// to data and provide the context to all components that have access

// In this component I get current clicked element(column) that wanna be sorted ->
// -> I find this element in our data array and change sort type for it ->
// -> return updated array (column array)

import { useReducer } from 'react';
import TableContext from './table-context';

//imagine, that we get this data from API
//I added {col_sort_type: 'asc'} to each element - for helping get the sort typ is it asc or dsc
const defaultTableState = {
  tableHeader : [
    {
      col_name : 'expand',
      col_visible: true,
      col_label: '',
      col_type: 'symbol',
      col_width: 5,
      col_sort: null,
      col_sort_type: 'asc',
    },
    {
      col_name : 'skreenId',
      col_visible: true,
      col_label: 'Screen',
      col_type: 'string',
      col_width: 25,
      col_sort: false,
      col_sort_type: 'asc',
    },
    {
      col_name : 'locationId',
      col_visible: true,
      col_label: 'Location',
      col_type: 'string',
      col_width: 20,
      col_sort: true,
      col_sort_type: 'asc',
    }, {
      col_name : 'schDate',
      col_visible: true,
      col_label: 'Date',
      col_type: 'date',
      col_width: 15,
      col_sort: true,
      col_sort_type: 'asc',
    }, {
      col_name : 'showTime',
      col_visible: true,
      col_label: 'Show Time',
      col_type: 'time',
      col_width: 15,
      col_sort: true,
      col_sort_type: 'asc',
    },
    {
      col_name : 'logStatus',
      col_visible: true,
      col_label: 'Play Log Status',
      col_type: 'string',
      col_width: 20,
      col_sort: true,
      col_sort_type: 'asc',
    }
  ]
};

const tableReducer = (state, action) => {
  if (action.type === 'SORT') {
    const updateTableHeader = state.tableHeader.map(item => {
      //get element that was clicked for updating sort type
      if (item.col_name === action.name){
        //change asc to dsc and vice versa
        const newSortType = item.col_sort_type === 'asc' ? 'dsc' : 'asc';
        //return element with new sort type
        return {...item, col_sort_type : newSortType}
      }
      return item
    })
    //return updating array of elements
    return {
      tableHeader: updateTableHeader
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
  const sortItemInColum = (name) => {
    dispatchSortAction({ type: 'SORT', name: name });
  };

  //our context that updated by event
  const tableContext = {
    tableHeader: tableState.tableHeader,
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
