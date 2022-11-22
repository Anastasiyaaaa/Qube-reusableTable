function fnNumIntValue(arg, dataObj) {
  let result;
  arg.forEach((value) => {
    if (`${value}` in dataObj) {
      result = dataObj[value]
    } else {
      result = ' '
    }
  })
  return result;
}

function fnNumNotIntValue(arg, dataObj) {
  let result;
  arg.forEach((value) => {
    if (`${value}` in dataObj) {
      result = dataObj[value]
    } else {
      result = ' '
    }
  })
  return result;
}

function fnSpotsMaxValue(arg, dataObj) {
  let result;
  arg.forEach((value) => {
    if (`${value}` in dataObj) {
      result = `Max: ${dataObj[value]}`
    } else {
      result = ' '
    }
  })
  return result;
}

function fnTakenCountValue(arg, dataObj) {
  let result;
  arg.forEach((value) => {
    if (`${value}` in dataObj) {
      result = `Taken: ${dataObj[value]}`
    } else {
      result = ' '
    }
  })
  return result;
}

function fnStringValue(arg, dataObj) {
  let result;
  arg.forEach((value) => {
    if (`${value}` in dataObj) {
      result = dataObj[value]
    } else {
      result = ' '
    }
  })
  return result;
}

function fnSpotsMovValue(arg, dataObj) {
  let result;
  arg.forEach((value) => {
    if (`${value}` in dataObj) {
      result = `Movies: ${dataObj[value]}`
    } else {
      result = ' '
    }
  })
  return result;
}

function fnPlayedCountValue(arg, dataObj) {
  let result;
  arg.forEach((value) => {
    if (`${value}` in dataObj) {
      result = `Played: ${dataObj[value]}`
    } else {
      result = ' '
    }
  })
  return result;
}

function fnSpotsPlayedValue(arg, dataObj) {
  let result;
  arg.forEach((value) => {
    if (`${value}` in dataObj) {
      result = `Played: ${dataObj[value]}`
    } else {
      result = ' '
    }
  })
  return result;
}

function fnSpotsScheduledValue(arg, dataObj) {
  let result;
  arg.forEach((value) => {
    if (`${value}` in dataObj) {
      result = `Sch ${dataObj[value]}`
    } else {
      result = ' '
    }
  })
  return result;
}

function fnNotPlayedCountValue(arg, dataObj) {
  let result;
  arg.forEach((value) => {
    if (`${value}` in dataObj) {
      result = `Not Played ${dataObj[value]}`
    } else {
      result = ' '
    }
  })
  return result;
}

function fnNotTakenCountValue(arg, dataObj) {
  let result;
  arg.forEach((value) => {
    if (`${value}` in dataObj) {
      result = `Not Taken: ${dataObj[value]}`
    } else {
      result = ' '
    }
  })
  return result;
}

function fnTimeValue(arg, dataObj) {
  let result;
  arg.forEach((value, i) => {
    if (`${value}` in dataObj) {
      result += `${dataObj[value]}`
    } else {
      result = ' '
    }
    if (i === 1) {
      result += ` - `
    }
  })
  return result;
}

function fnLastPlayedOn(arg, dataObj) {
  let result;
  arg.forEach((value) => {
    if (`${value}` in dataObj) {
      result = dataObj[value]
    } else {
      result = ' '
    }
  })
  return result;
}

function fnTakenOn(arg, dataObj) {
  let result;
  arg.forEach((value) => {
    if (`${value}` in dataObj) {
      result = dataObj[value]
    } else {
      result = ' '
    }
  })
  return result;
}

function fnScreenCodeValue(arg, dataObj) {
  let result;
  arg.forEach((value) => {
    if (`${value}` in dataObj) {
      result = `Code: ${dataObj[value]}`
    } else {
      result = ' '
    }
  })
  return result;
}

function fnExpand(arg, dataObj) {
  let result;
  arg.forEach((value) => {
    if (`${value}` in dataObj) {
      if (dataObj[value] === 0) {
        result = `>`
      } else {
        result = '⋁'
      }
    } else {
      result = ' '
    }
  })
  return result;

}

const getValueFunction = function (colValue, dataObj) {
  let value;

  if (Array.isArray(colValue)) {

    const functionName = colValue[0];
    //when I used shift method and it changes also in the data structure my array,
    // and broke the code
    //I try your logic with filter
    colValue.filter((i, id) => id !== 0)

    switch (functionName) {
      case 'fnStringValue':
        value = fnStringValue(colValue, dataObj);
        break;
      case 'fnNumIntValue':
        value = fnNumIntValue(colValue, dataObj);
        break;
      case 'fnSpotsMaxValue':
        value = fnSpotsMaxValue(colValue, dataObj);
        break;
      case 'fnSpotsMovValue':
        value = fnSpotsMovValue(colValue, dataObj);
        break;
      case 'fnNumNotIntValue':
        value = fnNumNotIntValue(colValue, dataObj);
        break;
      case 'fnTakenCountValue':
        value = fnTakenCountValue(colValue, dataObj);
        break;
      case 'fnPlayedCountValue':
        value = fnPlayedCountValue(colValue, dataObj);
        break;
      case 'fnNotTakenCountValue':
        value = fnNotTakenCountValue(colValue, dataObj);
        break;
      case 'fnNotPlayedCountValue':
        value = fnNotPlayedCountValue(colValue, dataObj);
        break;
      case 'fnSpotsScheduledValue':
        value = fnSpotsScheduledValue(colValue, dataObj);
        break;
      case 'fnSpotsPlayedValue':
        value = fnSpotsPlayedValue(colValue, dataObj);
        break;
      case 'fnTimeValue':
        value = fnTimeValue(colValue, dataObj);
        break;
      case 'fnLastPlayedOn':
        value = fnLastPlayedOn(colValue, dataObj);
        break;
      case 'fnTakenOn':
        value = fnTakenOn(colValue, dataObj);
        break;
      case 'fnScreenCodeValue':
        value = fnScreenCodeValue(colValue, dataObj);
        break;
      case 'fnExpand':
        value = fnExpand(colValue, dataObj);
        break;
      default:
        value = '';
    }
  }
  if (!Array.isArray(colValue) && colValue !== null) {
    value = colValue || ' ';
  }
  if (colValue === null) {
    value = '';
  }
  return value;
}

export default getValueFunction;