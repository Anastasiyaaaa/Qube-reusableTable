//I changed {col_minWidth: 150, col_sort: 'asc'} to each element - for helping get the sort typ is it asc or dsc
export const defaultTableState = {
  currentPage: 'ordersPage',
  ordersPage: {
    tableColumnStructure: [
      {
        col_name: 'expand',
        col_visible: true,
        col_label: '>',
        col_type: 'symbol',
        col_value: ['fnExpand', 'expand'],
        col_subValue: null,
        col_width: 3,
        col_minWidth: 10,
        col_sort: null,
      },
      {
        col_name: 'orderId',
        col_visible: true,
        col_label: 'Order ID',
        col_type: 'string',
        col_value: ['fnStringValue', 'orderId'],
        col_subValue: null,
        col_width: 15,
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
        col_width: 10,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'noOfSchedules',
        col_visible: true,
        col_label: 'Schedule\nCount',
        col_type: 'string',
        col_value: ['fnNumIntValue', 'noOfSchedules'],
        col_subValue: null,
        col_width: 9,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'spotsMaximum',
        col_visible: true,
        col_label: 'Spots\nMaximum',
        col_type: 'string',
        col_value: ['fnSpotsMaxValue', 'spotsMaximum'],
        col_subValue: null,
        col_width: 9,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'spotsScheduled',
        col_visible: true,
        col_label: 'Spots\nScheduled',
        col_type: 'string',
        col_value: ['fnNumIntValue', 'spotsScheduled'],
        col_subValue: null,
        col_width: 9,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'spotsPossible',
        col_visible: true,
        col_label: 'Spots\nMovies',
        col_type: 'string',
        col_value: ['fnSpotsMovValue', 'spotsPossible'],
        col_subValue: null,
        col_width: 9,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'spotsPlayed',
        col_visible: true,
        col_label: 'Spots\nPlayed',
        col_type: 'string',
        col_value: ['fnStringValue', 'spotsPlayed'],
        col_subValue: null,
        col_width: 9,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'takenPercent',
        col_visible: true,
        col_label: 'Taken\nPercent',
        col_type: 'string',
        col_value: ['fnNumNotIntValue', 'takenPercent'],
        col_subValue: null,
        col_width: 9,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'playedPercent',
        col_visible: true,
        col_label: 'Played\nPercent',
        col_type: 'string',
        col_value: ['fnNumNotIntValue', 'playedPercent'],
        col_subValue: null,
        col_width: 9,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'spotsPlayedPercent',
        col_visible: true,
        col_label: 'Spots\nPercent',
        col_type: 'string',
        col_value: ['fnNumNotIntValue', 'spotsPlayedPercent'],
        col_subValue: null,
        col_width: 9,
        col_minWidth: 100,
        col_sort: 'asc',
      }
    ],
    tableData: [
      {
        expand: 1,
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
        expand: 0,
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
    tableColumnStructure: [
      {
        col_name: 'expand',
        col_visible: true,
        col_label: '>',
        col_type: 'symbol',
        col_value: ['fnExpand', 'expand'],
        col_subValue: null,
        col_width: 3,
        col_minWidth: 10,
        col_sort: null,
      },
      {
        col_name: 'schedule',
        col_visible: true,
        col_label: 'Schedule Name',
        col_type: 'string',
        col_value: ['fnStringValue', 'schedule'],
        col_subValue: ['fnStringValue', 'schedule'],
        col_width: 25,
        col_minWidth: 150,
        col_sort: null,
      },
      {
        col_name: 'noOfScreens',
        col_visible: true,
        col_label: 'Screen\nCount',
        col_type: 'string',
        col_value: ['fnStringValue', 'noOfScreens'],
        col_subValue: null,
        col_width: 9,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'totalTaken',
        col_visible: true,
        col_label: 'Taken\nCount',
        col_type: 'string',
        col_value: ['fnTakenCountValue', 'totalTaken'],
        col_subValue: ['fnNotTakenCountValue', 'totalNotTaken'],
        col_width: 9,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'totalPlayed',
        col_visible: true,
        col_label: 'Played\nCount',
        col_type: 'string',
        col_value: ['fnPlayedCountValue', 'totalPlayed'],
        col_subValue: ['fnNotPlayedCountValue', 'totalNotPlayed'],
        col_width: 9,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'spotsMaximum',
        col_visible: true,
        col_label: 'Spots\nMax/Sch.',
        col_type: 'string',
        col_value: ['fnSpotsMaxValue', 'spotsMaximum'],
        col_subValue: ['fnSpotsScheduledValue', 'spotsScheduled'],
        col_width: 9,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'spotsPossible',
        col_visible: true,
        col_label: 'Spots\nMov./Play',
        col_type: 'string',
        col_value: ['fnSpotsMovValue', 'spotsPossible'],
        col_subValue: ['fnSpotsPlayedValue', 'spotsPlayed'],
        col_width: 9,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'takenPercent',
        col_visible: true,
        col_label: 'Taken\nPercent',
        col_type: 'string',
        col_value: ['fnNumNotIntValue', 'takenPercent'],
        col_subValue: null,
        col_width: 9,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'playedPercent',
        col_visible: true,
        col_label: 'Played\nPercent',
        col_type: 'string',
        col_value: ['fnNumNotIntValue', 'playedPercent'],
        col_subValue: null,
        col_width: 9,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'spotsPlayedPercent',
        col_visible: true,
        col_label: 'Spots\nPercent',
        col_type: 'string',
        col_value: ['fnNumNotIntValue', 'spotsPlayedPercent'],
        col_subValue: null,
        col_width: 9,
        col_minWidth: 100,
        col_sort: 'asc',
      },
    ],
    tableData: [
      {
        expand: 1,
        schedule: 'CMRShopMSI012011027ENAP22',
        noOfScreens: '3',
        totalTaken: '2',
        totalNotTaken: '2',
        totalPlayed: '1',
        totalNotPlayed: '2',
        spotsMaximum: '22',
        spotsScheduled: '18',
        spotsPossible: '63',
        spotsPlayed: '63',
        takenPercent: '33.33',
        playedPercent: '33.33',
        spotsPlayedPercent: '39.68'
      },
      {
        expand: 0,
        schedule: 'AaaaaaCMRShopMSI012011027ENAP23',
        noOfScreens: '3',
        totalTaken: '2',
        totalNotTaken: '2',
        totalPlayed: '1',
        totalNotPlayed: '2',
        spotsMaximum: '22',
        spotsScheduled: '18',
        spotsPossible: '63',
        spotsPlayed: '63',
        takenPercent: '33.33',
        playedPercent: '33.33',
        spotsPlayedPercent: '39.68'
      },
    ],
  },
  screensPage: {
    tableColumnStructure: [
      {
        col_name: 'expand',
        col_visible: true,
        col_label: '>',
        col_type: 'symbol',
        col_value: ['fnExpand', 'expand'],
        col_subValue: null,
        col_width: 3,
        col_minWidth: 10,
        col_sort: null,
      },
      {
        col_name: 'screen',
        col_visible: true,
        col_label: 'Screen Name',
        col_type: 'string',
        col_value: ['fnStringValue', 'screen'],
        col_subValue: ['fnScreenCodeValue', 'screenCode'],
        col_width: 20,
        col_minWidth: 150,
        col_sort: null,
      },
      {
        col_name: 'scheduleStatus',
        col_visible: true,
        col_label: 'Schedule\nStatus',
        col_type: 'string',
        col_value: ['fnStringValue', 'scheduleStatus'],
        col_subValue: ['fnTakenOn', 'takenOn'],
        col_width: 11,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'playLogStatus',
        col_visible: true,
        col_label: 'Playlog\nStatus',
        col_type: 'string',
        col_value: ['fnStringValue', 'playLogStatus'],
        col_subValue: ['fnLastPlayedOn', 'lastPlayedOn'],
        col_width: 11,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'spotsMaximum',
        col_visible: true,
        col_label: 'Spots\nMaximum',
        col_type: 'string',
        col_value: ['fnSpotsMaxValue', 'spotsMaximum'],
        col_subValue: null,
        col_width: 11,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'spotsScheduled',
        col_visible: true,
        col_label: 'Spots\nScheduled',
        col_type: 'string',
        col_value: ['fnNumIntValue', 'spotsScheduled'],
        col_subValue: null,
        col_width: 11,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'spotsPossible',
        col_visible: true,
        col_label: 'Spots\nMovies',
        col_type: 'string',
        col_value: ['fnSpotsMovValue', 'spotsPossible'],
        col_subValue: null,
        col_width: 11,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'spotsPlayed',
        col_visible: true,
        col_label: 'Spots\nPlayed',
        col_type: 'string',
        col_value: ['fnStringValue', 'spotsPlayed'],
        col_subValue: null,
        col_width: 11,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'spotsPlayedPercent',
        col_visible: true,
        col_label: 'Spots\nPercent',
        col_type: 'string',
        col_value: ['fnNumNotIntValue', 'spotsPlayedPercent'],
        col_subValue: null,
        col_width: 11,
        col_minWidth: 100,
        col_sort: 'asc',
      },
    ],
    tableData: [
      {
        expand: 1,
        screen: 'Wave Cinema S1, Moradabad',
        scheduleStatus: 'Taken',
        playLogStatus: 'Pending',
        spotsMaximum: '80',
        spotsScheduled: '80',
        spotsPossible: '112',
        spotsPlayed: '40',
        spotsPlayedPercent: '50',
        screenCode: 'XQW0058',
        takenOn: '24-May-22 10:00',
        lastPlayedOn: '24-May-22 10:00',
      },
      {
        expand: 1,
        screen: 'Wave Cinema S2, Moradabad',
        scheduleStatus: 'Taken',
        playLogStatus: 'Pending',
        spotsMaximum: '80',
        spotsScheduled: '80',
        spotsPossible: '112',
        spotsPlayed: '40',
        spotsPlayedPercent: '50',
        screenCode: 'XQW0058',
        takenOn: '24-May-22 10:00',
        lastPlayedOn: '24-May-22 10:00',
      },
    ],
  },
  showPage: {
    tableColumnStructure: [
      {
        col_name: 'showDate',
        col_visible: true,
        col_label: 'Date',
        col_type: 'string',
        col_value: ['fnStringValue', 'showDate'],
        col_subValue: null,
        col_width: 12,
        col_minWidth: 150,
        col_sort: null,
      },
      {
        col_name: 'startTime',
        col_visible: true,
        col_label: 'Time',
        col_type: 'string',
        col_value: ['fnTimeValue', 'startTime', 'endTime'],
        col_subValue: null,
        col_width: 11,
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
        col_width: 11,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'prefPosition',
        col_visible: true,
        col_label: 'Pref.\nPosition',
        col_type: 'string',
        col_value: ['fnStringValue', 'prefPosition'],
        col_subValue: null,
        col_width: 11,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'moviesPlayed',
        col_visible: true,
        col_label: 'Movie\nPlayed',
        col_type: 'string',
        col_value: ['fnStringValue', 'moviesPlayed'],
        col_subValue: null,
        col_width: 11,
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
        col_width: 11,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'spotsScheduled',
        col_visible: true,
        col_label: 'Spots\nScheduled',
        col_type: 'string',
        col_value: ['fnNumIntValue', 'spotsScheduled'],
        col_subValue: null,
        col_width: 11,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'spotsPlayed',
        col_visible: true,
        col_label: 'Spots\nPlayed',
        col_type: 'string',
        col_value: ['fnStringValue', 'spotsPlayed'],
        col_subValue: null,
        col_width: 11,
        col_minWidth: 100,
        col_sort: 'asc',
      },
      {
        col_name: 'spotsPlayedPercent',
        col_visible: true,
        col_label: 'Spots\nPercent',
        col_type: 'string',
        col_value: ['fnNumNotIntValue', 'spotsPlayedPercent'],
        col_subValue: null,
        col_width: 11,
        col_minWidth: 100,
        col_sort: 'asc',
      }
    ],
    tableData: [
      {
        showDate: 'Mon 17-Oct-22',
        startTime: '09:00',
        endTime: '13:29',
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
        endTime: '17:44',
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
