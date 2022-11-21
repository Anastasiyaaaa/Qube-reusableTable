
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

function fnTimeValue(value1, value2, dataObj) {
  let totalValue = ''
  if (`${value1}` in dataObj) {

    totalValue +=` ${dataObj[value1]} `
  }else {
    totalValue += '';
  }
  if (`${value2}` in dataObj) {
    totalValue +=`- ${dataObj[value2]} `
  }else {
    totalValue += '';
  }
  return totalValue;
}
function fnLastPlayedOn(value1, dataObj) {
  if (`${value1}` in dataObj) {
    return dataObj[value1]
  } else {
    return ' '
  }
}
function fnTakenOn(value1, dataObj) {
  if (`${value1}` in dataObj) {
    return dataObj[value1]
  } else {
    return ' '
  }
}
function fnScreenCodeValue(value1, dataObj) {
  if (`${value1}` in dataObj) {
    return `Code: ${dataObj[value1]}`
  } else {
    return ' '
  }
}

const getValueFunction = function (data,  dataObj) {
  const functionName = data[0];
  const value1 = data[1];

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
    case 'fnTimeValue':
      value = fnTimeValue(value1, data[2], dataObj);
      break;
    case 'fnLastPlayedOn':
      value = fnLastPlayedOn(value1, dataObj);
      break;
    case 'fnTakenOn':
      value = fnTakenOn(value1, dataObj);
      break;
    case 'fnScreenCodeValue':
      value = fnScreenCodeValue(value1, dataObj);
      break;
  }

  return value;
}

export default getValueFunction;