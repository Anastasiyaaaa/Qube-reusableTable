import { useReducer } from 'react';

import TableContext from './table-context';

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
      if (item.col_name === action.name){
        const newSortType = item.col_sort_type === 'asc' ? 'dsc' : 'asc';
        return {...item, col_sort_type : newSortType}
      }
      return item
    })

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

 

  const sortItemInColum = (name) => {
    dispatchSortAction({ type: 'SORT', name: name });
  };

  const tableContext = {
    tableHeader: tableState.tableHeader,
    sortFunction: sortItemInColum,
  }

  return (
    <TableContext.Provider value={tableContext}>
      {props.children}
    </TableContext.Provider>
  );
};

export default TableProvider;
