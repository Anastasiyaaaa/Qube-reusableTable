//I changed {col_minWidth: 150, col_sort: 'asc'} to each element - for helping get the sort typ is it asc or dsc
export const defaultTableState = {
  defaultValue: {                       // UR: UR: No default
    expand: 'expand',
    screenId: 'screenId',
    schDate: 'schDate',
    showTime: 'showTime',
    logStatus: 'logStatus',
    locationCurrent: 'locationCurrent',
    realTime: 'realTime',
  },
  currentPage: 'ordersPage',
  ordersPage: {
    tableColumnStructure: [             // UR: Total Width% is greater than 100
      {
        col_name: 'expand',
        col_visible: true,
        col_label: '',                  // UR: will have label '>'
        col_type: 'symbol',
        col_value: '>',
        col_subValue: null,
        col_width: 5,
        col_minWidth: 10,
        col_sort: null,
      },
      {
        col_name: 'orderId',
        col_visible: true,
        col_label: 'Screen',            // UR: Order ID
        col_type: 'string',
        col_value: ['fnStringValue', 'orderId'],
        col_subValue: null,
        col_width: 25,
        col_minWidth: 150,
        col_sort: null,
      },
      {
        col_name: 'govtRoNo',
        col_visible: true,
        col_label: 'Govt. RO No.',
        col_type: 'string',
        col_value: ['fnStringValue', 'govtRoNo'],
        col_subValue: null,
        col_width: 20,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'noOfSchedules',
        col_visible: true,
        col_label: 'Schedule Count',    // UR: must include \n for LF
        col_type: 'string',
        col_value: ['fnNumIntValue', 'noOfSchedules'],
        col_subValue: null,
        col_width: 15,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'spotsMaximum',
        col_visible: true,
        col_label: 'Spots Maximum',     // UR: must include \n for LF
        col_type: 'string',
        col_value: ['fnSpotsMaxValue', 'spotsMaximum'],
        col_subValue: null,
        col_width: 15,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'spotsScheduled',
        col_visible: true,
        col_label: 'Spots Scheduled',   // UR: must include \n for LF
        col_type: 'string',
        col_value: ['fnNumIntValue', 'spotsScheduled'],
        col_subValue: null,
        col_width: 20,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'spotsPossible',
        col_visible: true,
        col_label: 'Spots Movies',      // UR: must include \n for LF
        col_type: 'string',
        col_value: ['fnSpotsMovValue', 'spotsPossible'],
        col_subValue: null,
        col_width: 20,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'spotsPlayed',
        col_visible: true,
        col_label: 'Spots Played',
        col_type: 'string',
        col_value: ['fnStringValue', 'spotsPlayed'],
        col_subValue: null,
        col_width: 20,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'takenPercent',
        col_visible: true,
        col_label: 'Taken Percent',     // UR: must include \n for LF
        col_type: 'string',
        col_value: ['fnNumNotIntValue', 'takenPercent'],
        col_subValue: null,
        col_width: 20,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'playedPercent',
        col_visible: true,
        col_label: 'Played Percent',    // UR: must include \n for LF
        col_type: 'string',
        col_value: ['fnNumNotIntValue', 'playedPercent'],
        col_subValue: null,
        col_width: 20,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'spotsPlayedPercent',
        col_visible: true,
        col_label: 'Spots Percent',     // UR: must include \n for LF
        col_type: 'string',
        col_value: ['fnNumNotIntValue', 'spotsPlayedPercent'],
        col_subValue: null,
        col_width: 20,
        col_minWidth: 100,
        col_sort: 'asc',
      }
    ],
    tableData: [
      {
        expand: false,
        orderId: 'QCS/006535/21-23',
        govtRoNo: 'XX-YY-ZZ',
        noOfSchedules: '2',
        spotsMaximum: '128',
        spotsScheduled: '84',
        spotsPossible: '112',
        spotsPlayed: '46',
        takenPercent: '90.00',
        playedPercent: '54.76',
        spotsPlayedPercent: '22.22'
      },
      {
        expand: false,
        orderId: 'QCS/006535/21-22',
        govtRoNo: 'AA-BB-CC-41',
        noOfSchedules: '2',
        spotsScheduled: '84',
        spotsPossible: '112',
        spotsPlayed: '46',
        playedPercent: '54.76',
        spotsPlayedPercent: '33.33'
      },
    ],
  },
  schedulesPage: {
    tableColumnStructure: [             // UR: Total Width% is greater than 100
      {
        col_name: 'expand',
        col_visible: true,
        col_label: '',                  // UR: will have label '>'
        col_type: 'symbol',
        col_value: '>',
        col_subValue: null,
        col_width: 5,
        col_minWidth: 10,
        col_sort: null,
      },
      {
        col_name: 'schedule',
        col_visible: true,
        col_label: 'Screen',            // UR: Schedule Name
        col_type: 'string',
        col_value: ['fnStringValue', 'schedule'],
        col_subValue: null,             // UR: will have sub-value
        col_width: 25,
        col_minWidth: 150,
        col_sort: null,
      },
      {
        col_name: 'noOfScreens',
        col_visible: true,
        col_label: 'Screen Count',      // UR: must include \n for LF    
        col_type: 'string',
        col_value: ['fnStringValue', 'noOfScreens'],
        col_subValue: null,
        col_width: 20,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'totalTaken',
        col_visible: true,
        col_label: 'Taken Count',       // UR: must include \n for LF
        col_type: 'string',
        col_value: ['fnTakenCountValue', 'totalTaken'],
        col_subValue: '',               // UR: will have sub-value
        col_width: 15,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'totalPlayed',
        col_visible: true,
        col_label: 'Played Count',      // UR: must include \n for LF
        col_type: 'string',
        col_value: ['fnPlayedCountValue', 'totalPlayed'],
        col_subValue: '',               // UR: will have sub-value
        col_width: 15,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'spotsMaximum',
        col_visible: true,
        col_label: 'Spots Max',         // UR: must include \n for LF -- Spots Max/Sch.
        col_type: 'string',
        col_value: ['fnSpotsMaxValue', 'spotsMaximum'],
        col_subValue: '',               // UR: will have sub-value
        col_width: 20,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'spotsPossible',
        col_visible: true,
        col_label: 'Spots Mov',         // UR: must include \n for LF  -- Spots Mov./Play
        col_type: 'string',
        col_value: ['fnSpotsMovValue', 'spotsPossible'],
        col_subValue: '',               // UR: will have sub-value
        col_width: 20,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'takenPercent',
        col_visible: true,
        col_label: 'Taken Percent',     // UR: must include \n for LF
        col_type: 'string',
        col_value: ['fnNumNotIntValue', 'takenPercent'],
        col_subValue: null,
        col_width: 20,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'playedPercent',
        col_visible: true,
        col_label: 'Played Percent',    // UR: must include \n for LF
        col_type: 'string',
        col_value: ['fnNumNotIntValue', 'playedPercent'],
        col_subValue: null,
        col_width: 20,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'spotsPlayedPercent',
        col_visible: true,
        col_label: 'Spots Percent',     // UR: must include \n for LF
        col_type: 'string',
        col_value: ['fnNumNotIntValue', 'spotsPlayedPercent'],
        col_subValue: null,
        col_width: 20,
        col_minWidth: 100,
        col_sort: 'asc',
      },
    ],
    tableData: [
      {
        expand: false,
        schedule: 'CMRShopMSI012011027ENAP22',
        noOfScreens: '3',
        totalTaken: '2',
        totalPlayed: '1',
        spotsMaximum: '22',
        spotsPossible: '63',
        takenPercent: '33.33',
        playedPercent: '33.33',
        spotsPlayedPercent: '39.68'
      },
      {
        expand: false,
        schedule: 'CMRShopMSI012011027ENAP22',
        noOfScreens: '3',
        totalTaken: '2',
        totalPlayed: '1',
        spotsMaximum: '22',
        spotsPossible: '63',
        takenPercent: '33.33',
        playedPercent: '33.33',
        spotsPlayedPercent: '39.68'
      },],
  },
  screensPage: {
    tableColumnStructure: [             // UR: Total Width% is greater than 100
      {
        col_name: 'expand',
        col_visible: true,
        col_label: '',                  // UR: will have label '>'
        col_type: 'symbol',
        col_value: '>',
        col_subValue: null,
        col_width: 5,
        col_minWidth: 10,
        col_sort: null,
      },
      {
        col_name: 'screen',
        col_visible: true,
        col_label: 'Screen Name',
        col_type: 'string',
        col_value: ['fnStringValue', 'screen'],
        col_subValue: '',               // UR: will have sub-value
        col_width: 25,
        col_minWidth: 150,
        col_sort: null,
      },
      {
        col_name: 'scheduleStatus',
        col_visible: true,
        col_label: 'Schedule vStatus',  // UR: spelling!! -- must include \n for LF
        col_type: 'string',
        col_value: ['fnStringValue', 'scheduleStatus'],
        col_subValue: '',               // UR: will have sub-value
        col_width: 20,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'playLogStatus',
        col_visible: true,
        col_label: 'Playlog Status',    // UR: must include \n for LF
        col_type: 'string',
        col_value: ['fnStringValue', 'playLogStatus'],
        col_subValue: '',               // UR: will have sub-value
        col_width: 15,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'spotsMaximum',
        col_visible: true,
        col_label: 'Spots vMaximum',    // UR: spelling!! -- must include \n for LF
        col_type: 'string',
        col_value: ['fnSpotsMaxValue', 'spotsMaximum'],
        col_subValue: null,
        col_width: 20,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'spotsScheduled',
        col_visible: true,
        col_label: 'Spots vScheduled',  // spelling!! -- must include \n for LF
        col_type: 'string',
        col_value: ['fnNumIntValue', 'spotsScheduled'],
        col_subValue: null,
        col_width: 20,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'spotsPossible',
        col_visible: true,
        col_label: 'Spots vMovies',     // UR: spelling!! -- must include \n for LF
        col_type: 'string',
        col_value: ['fnSpotsMovValue', 'spotsPossible'],
        col_subValue: null,
        col_width: 20,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'takenPercent',       // UR: no such field!!!
        col_visible: true,
        col_label: 'Taken Percent',
        col_type: 'string',
        col_value: ['fnNumNotIntValue', 'takenPercent'],
        col_subValue: null,
        col_width: 20,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'spotsPlayed',
        col_visible: true,
        col_label: 'Spots vPlayed',     // UR: spelling!! -- must include \n for LF
        col_type: 'string',
        col_value: ['fnStringValue', 'spotsPlayed'],
        col_subValue: null,
        col_width: 20,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'spotsPlayedPercent',
        col_visible: true,
        col_label: 'Spots Percent',     // UR: must include \n for LF
        col_type: 'string',
        col_value: ['fnNumNotIntValue', 'spotsPlayedPercent'],
        col_subValue: null,
        col_width: 20,
        col_minWidth: 100,
        col_sort: 'asc',
      },
    ],
    tableData: [
      {
        expand: false,
        screen: 'Wave Cinema S1, Moradabad',
        scheduleStatus: 'Taken',
        playLogStatus: 'Pending',
        spotsMaximum: '80',
        spotsScheduled: '80',
        spotsPossible: '112',
        spotsPlayed: '40',
        spotsPlayedPercent: '50'
      },
      {
        expand: false,
        screen: 'Wave Cinema S2, Moradabad',
        scheduleStatus: 'Taken',
        playLogStatus: 'Pending',
        spotsMaximum: '80',
        spotsScheduled: '80',
        spotsPossible: '112',
        spotsPlayed: '40',
        spotsPlayedPercent: '50'
      },
    ],
  },
  showPage: {
    tableColumnStructure: [             // UR: Total Width% is greater than 100 
      {
        col_name: 'showDate',
        col_visible: true,
        col_label: 'Date',
        col_type: 'string',
        col_value: ['fnStringValue', 'showDate'],
        col_subValue: null,
        col_width: 25,
        col_minWidth: 150,
        col_sort: null,
      },
      {
        col_name: 'startTime',
        col_visible: true,
        col_label: 'Time',
        col_type: 'string',
        col_value: ['fnStringValue', 'startTime'],  // UR: will need endTime too
        col_subValue: null,
        col_width: 20,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'position',
        col_visible: true,
        col_label: 'Position',
        col_type: 'string',
        col_value: ['fnStringValue', 'position'],
        col_subValue: null,
        col_width: 15,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'prefPosition',
        col_visible: true,
        col_label: 'Pref Position',     // UR: Pref. -- must include \n for LF
        col_type: 'string',
        col_value: ['fnStringValue', 'prefPosition'],
        col_subValue: null,
        col_width: 15,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'moviesPlayed',
        col_visible: true,
        col_label: 'Movie Played',      // UR: must include \n for LF
        col_type: 'string',
        col_value: ['fnStringValue', 'moviesPlayed'],
        col_subValue: null,
        col_width: 20,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'spotRepetition',
        col_visible: true,
        col_label: 'Repetition',
        col_type: 'string',
        col_value: ['fnStringValue', 'spotRepetition'],
        col_subValue: null,
        col_width: 20,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'spotsScheduled',
        col_visible: true,
        col_label: 'Spots Scheduled',   // UR: must include \n for LF
        col_type: 'string',
        col_value: ['fnNumIntValue', 'spotsScheduled'],
        col_subValue: null,
        col_width: 20,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'spotsPlayed',
        col_visible: true,
        col_label: 'Spots Played',      // UR: must include \n for LF
        col_type: 'string',
        col_value: ['fnStringValue', 'spotsPlayed'],
        col_subValue: null,
        col_width: 20,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'spotsPlayedPercent',
        col_visible: true,
        col_label: 'Spots Percent',     // UR: must include \n for LF
        col_type: 'string',
        col_value: ['fnNumNotIntValue', 'spotsPlayedPercent'],
        col_subValue: null,
        col_width: 20,
        col_minWidth: 100,
        col_sort: 'asc',
      }
    ],
    tableData: [
      {
        showDate: 'Mon 17-Oct-22',
        startTime: '09:00',
        position: 'IntermissionAds',
        prefPosition: 'Normal',
        moviesPlayed: '0',
        spotRepetition: '1',
        spotsScheduled: '1',
        spotsPlayed: '0',
        spotsPlayedPercent: '22.22'
      },
      {
        showDate: 'Mon 17-Oct-22',
        startTime: '19:00',
        position: 'PremiumPreShow',
        prefPosition: 'Normal',
        moviesPlayed: '1',
        spotRepetition: '2',
        spotsScheduled: '2',
        spotsPlayed: '2',
        spotsPlayedPercent: '44.44'
      },
    ],
  },
};
// currentPage - which page open
//ordersPage, schedulesPage - data for each page
