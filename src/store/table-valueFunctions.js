
function fnNumIntValue(value1, dataObj) {
  if (`${value1}` in dataObj) {
    return dataObj[value1]
  } else {
    return ' '
  }
}
function fnNumNotIntValue(value1, dataObj) {
  if (`${value1}` in dataObj) {
    return dataObj[value1]
  } else {
    return ' '
  }
}
function fnSpotsMaxValue(value1, dataObj) {
  if (`${value1}` in dataObj) {
    return `Max: ${dataObj[value1]}`
  } else {
    return ' '
  }
}
function fnTakenCountValue(value1, dataObj) {
  if (`${value1}` in dataObj) {
    return `Taken: ${dataObj[value1]}`
  } else {
    return ' '
  }
}

function fnStringValue(value1, dataObj) {
  if (`${value1}` in dataObj) {
    return dataObj[value1]
  } else {
    return ' '
  }
}

function fnSpotsMovValue(value1, dataObj) {
  if (`${value1}` in dataObj) {
    return `Movies: ${dataObj[value1]}`
  } else {
    return ' '
  }
}
function fnPlayedCountValue(value1, dataObj) {
  if (`${value1}` in dataObj) {
    return `Played: ${dataObj[value1]}`
  } else {
    return ' '
  }
}
function fnSpotsPlayedValue(value1, dataObj) {
  if (`${value1}` in dataObj) {
    return `Played: ${dataObj[value1]}`
  } else {
    return ' '
  }
}
function fnSpotsScheduledValue(value1, dataObj) {
  if (`${value1}` in dataObj) {
    return `Sch: ${dataObj[value1]}`
  } else {
    return ' '
  }
}
function fnNotPlayedCountValue(value1, dataObj) {
  if (`${value1}` in dataObj) {
    return `Not Played: ${dataObj[value1]}`
  } else {
    return ' '
  }
}
function fnNotTakenCountValue(value1, dataObj) {
  if (`${value1}` in dataObj) {
    return `Not Taken: ${dataObj[value1]}`
  } else {
    return ' '
  }
}

const getValueFunction = function (functionName, value1, dataObj) {
  let value;
  switch (functionName) {
    case 'fnStringValue':
      value = fnStringValue(value1, dataObj);
      break;
    case 'fnNumIntValue':
      value = fnNumIntValue(value1, dataObj);
      break;
    case 'fnSpotsMaxValue':
      value = fnSpotsMaxValue(value1, dataObj);
      break;
    case 'fnSpotsMovValue':
      value = fnSpotsMovValue(value1, dataObj);
      break;
    case 'fnNumNotIntValue':
      value = fnNumNotIntValue(value1, dataObj);
      break;
    case 'fnTakenCountValue':
      value = fnTakenCountValue(value1, dataObj);
      break;
    case 'fnPlayedCountValue':
      value = fnPlayedCountValue(value1, dataObj);
      break;
    case 'fnNotTakenCountValue':
      value = fnNotTakenCountValue(value1, dataObj);
      break;
    case 'fnNotPlayedCountValue':
      value = fnNotPlayedCountValue(value1, dataObj);
      break;
    case 'fnSpotsScheduledValue':
      value = fnSpotsScheduledValue(value1, dataObj);
      break;
    case 'fnSpotsPlayedValue':
      value = fnSpotsPlayedValue(value1, dataObj);
      break;
  }

  return value;
}

export default getValueFunction;