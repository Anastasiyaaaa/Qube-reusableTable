//I changed {col_sort: 'asc'} to each element - for helping get the sort typ is it asc or dsc
export const defaultTableState = {
  defaultValue:{
    expand: 'expand',
    screenId: 'screenId',
    schDate: 'schDate',
    showTime: 'showTime',
    logStatus: 'logStatus',
    locationCurrent: 'locationCurrent',
    realTime: 'realTime',
  },
  currentPage: 'mainPage',
  mainPage : {
    tableColumnStructure: [
      {
        col_name: 'expand',
        col_visible: true,
        col_label: '',
        col_type: 'symbol',
        col_width: 5,
        col_sort: null,
      },
      {
        col_name: 'screenId',
        col_visible: true,
        col_label: 'Screen',
        col_type: 'string',
        col_width: 25,
        col_sort: null,
      },
      {
        col_name: 'locationId',
        col_visible: false,
        col_label: 'Location',
        col_type: 'string',
        col_width: 20,
        col_sort: 'asc',
      },
      {
        col_name: 'schDate',
        col_visible: true,
        col_label: 'Date',
        col_type: 'date',
        col_width: 15,
        col_sort: 'asc',
      },
      {
        col_name: 'showTime',
        col_visible: true,
        col_label: 'Show Time',
        col_type: 'time',
        col_width: 15,
        col_sort: 'asc',
      },
      {
        col_name: 'logStatus',
        col_visible: true,
        col_label: 'Play Log Status',
        col_type: 'string',
        col_width: 20,
        col_sort: 'asc',
      }
    ],
    tableData: [
      {
        expand: false,
        screenId: 'f9d78djd9j34 Main',
        screenName: 'Screen1',
        locationId: 'DEL',
        locationName: 'Delhi, India',
        schDate: '2022-08-22',
        showTime: '18:20',
        logStatus: 'F'
      },
      {
        expand: false,
        screenId: 'k8fkd83dkf80',
        screenName: 'Screen1',
        locationId: 'CHN',
        locationName: 'Chennai, India',
        schDate: '2022-08-26',
        logStatus: 'P'
      },
      {
        screenId: 'test k8fkd83dkf80',
        screenName: 'Screen1',
        showTime: '14:20',
        locationId: 'Test',
        expand: false,
        locationName: 'Test  India',
        schDate: '2022-08-26',
        logStatus: 'P'
      },
    ],
  },
  extraPage: {
    tableColumnStructure: [
      {
        col_name: 'screenId',
        col_visible: true,
        col_label: 'Screen',
        col_type: 'string',
        col_width: 30,
        col_sort: null,
      },
      {
        col_name: 'locationCurrent',
        col_visible: true,
        col_label: 'Location',
        col_type: 'string',
        col_width: 35,
        col_sort: 'asc',
      },
      {
        col_name: 'realTime',
        col_visible: true,
        col_label: 'Real Time',
        col_type: 'time',
        col_width: 35,
        col_sort: 'asc',
      }
    ],
    tableData: [
      {
        testExpand: false,
        screenId: 'f9d78djd9j34 Extra',
        screenName: 'Screen1',
        locationName: 'Delhi, India',
        realTime: '18:20'
      },
      {
        testExpand: false,
        screenId: 'sxdfcgvhbjnkm',
        screenName: 'Screen1',
        locationCurrent: 'CHN',
        locationName: 'Chennai, India',
        realTime: '14:20'
      },
      {
        screenId: 'kjnhbgvjjk',
        screenName: 'Screen1',
        realTime: '14:20',
        locationCurrent: 'Test',
        testExpand: false,
        locationName: 'Test  India'
      },
    ]
  },
};
// currentPage - which page open
//mainPage, extraPage - data for each page
