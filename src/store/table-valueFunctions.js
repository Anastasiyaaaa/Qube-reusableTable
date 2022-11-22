function fnNumIntValue(dataObj, argList) {  // arglist always at the end
  let result;
  argList.forEach((value) => {
    if (`${value}` in dataObj) {
      result = dataObj[value];
    } else {
      result = '';
    }
  })
  return result;
}

function fnNumNotIntValue(dataObj, argList) {
  let result;
  argList.forEach((value) => {
    if (`${value}` in dataObj) {
      result = dataObj[value];
    } else {
      result = '';
    }
  })
  return result;
}

function fnSpotsMaxValue(dataObj, argList) {
  let result;
  argList.forEach((value) => {
    if (`${value}` in dataObj) {
      result = `Max: ${dataObj[value]}`;
    } else {
      result = '';
    }
  })
  return result;
}

function fnTakenCountValue(dataObj, argList) {
  let result;
  argList.forEach((value) => {
    if (`${value}` in dataObj) {
      result = `Taken: ${dataObj[value]}`;
    } else {
      result = '';
    }
  })
  return result;
}

function fnStringValue(dataObj, argList) {
  let result;
  argList.forEach((value) => {
    if (`${value}` in dataObj) {
      result = dataObj[value];
    } else {
      result = '';
    }
  })
  return result;
}

function fnSpotsMovValue(dataObj, argList) {
  let result;
  argList.forEach((value) => {
    if (`${value}` in dataObj) {
      result = `Movies: ${dataObj[value]}`;
    } else {
      result = '';
    }
  })
  return result;
}

function fnPlayedCountValue(dataObj, argList) {
  let result;
  argList.forEach((value) => {
    if (`${value}` in dataObj) {
      result = `Played: ${dataObj[value]}`
    } else {
      result = '';
    }
  })
  return result;
}

function fnSpotsPlayedValue(dataObj, argList) {
  let result;
  argList.forEach((value) => {
    if (`${value}` in dataObj) {
      result = `Played: ${dataObj[value]}`;
    } else {
      result = '';
    }
  })
  return result;
}

function fnSpotsScheduledValue(dataObj, argList) {
  let result;
  argList.forEach((value) => {
    if (`${value}` in dataObj) {
      result = `Sch ${dataObj[value]}`;
    } else {
      result = '';
    }
  })
  return result;
}

function fnNotPlayedCountValue(dataObj, argList) {
  let result;
  argList.forEach((value) => {
    if (`${value}` in dataObj) {
      result = `Not Played ${dataObj[value]}`;
    } else {
      result = '';
    }
  })
  return result;
}

function fnNotTakenCountValue(dataObj, argList) {
  let result;
  argList.forEach((value) => {
    if (`${value}` in dataObj) {
      result = `Not Taken: ${dataObj[value]}`;
    } else {
      result = '';
    }
  })
  return result;
}

function fnTimeValue(dataObj, argList) {
  let result;
  argList.forEach((value, i) => {
    if (`${value}` in dataObj) {
      result += `${dataObj[value]}`;
    } else {
      result = '';
    }
    if (i === 1) {
      result += ` - `
    }
  })
  return result;
}

function fnLastPlayedOn(dataObj, argList) {
  let result;
  argList.forEach((value) => {
    if (`${value}` in dataObj) {
      result = dataObj[value];
    } else {
      result = '';
    }
  })
  return result;
}

function fnTakenOn(dataObj, argList) {
  let result;
  argList.forEach((value) => {
    if (`${value}` in dataObj) {
      result = dataObj[value];
    } else {
      result = '';
    }
  })
  return result;
}

function fnScreenCodeValue(dataObj, argList) {
  let result;
  argList.forEach((value) => {
    if (`${value}` in dataObj) {
      result = `Code: ${dataObj[value]}`;
    } else {
      result = '';
    }
  })
  return result;
}

function fnExpand(dataObj, argList) {
  let result;
  argList.forEach((value) => {
    if (`${value}` in dataObj) {
      if (dataObj[value] === 0) {
        result = `>`;
      } else {
        result = 'v';
      }
    } else {
      result = '';
    }
  })
  return result;
}


// Case1: No value (null) in col_value | col_subValue
//        In this case a blank value is returned
//
// Case2: 1 value is passed in col_value | col_subValue
//        In this case returns the element from the data table
//
// Case3: 2 or more values in col_value | col_subValue
//        In this case 1st value is function and remaining args to that function
//        The function is executed and it returns a value

// Desc:  Finds, proceses and returns the value for Case2 & Case3
const getValueFunction = function (colValue, dataObj) {

  // Case1: blank or null
  if (colValue == '' || colValue == null) return '';  // log error

  // error handling ... 
  if  (!Array.isArray(colValue)) return '';

  // Case2: 1 value is passed 
  // if colValue does not exit null returned so padded
  if (colValue.length == 1) return dataObj[colValue] || '';
 
  let value;

  // Case3: 2 or more values is passed
  if (Array.isArray(colValue)) {

    // first argument is the function name
    const functionName = colValue[0];
    // remaining arguments are the parameters to be passed
    const argList = colValue.slice(1);

    //when I used shift method and it changes also in the data structure my array,
    // and broke the code
    //I try your logic with filter
    // colValue.filter((i, id) => id !== 0)

    switch (functionName) {
      case 'fnStringValue':
        // can use spread operator ... so that fn can work directly without forEach
        //value = fnStringValue(dataObj, ...argList);  CHECK:  
        
        value = fnStringValue(dataObj, argList);    // argument list always at the end
        break;
      case 'fnNumIntValue':
        value = fnNumIntValue(dataObj, argList);
        break;
      case 'fnSpotsMaxValue':
        value = fnSpotsMaxValue(dataObj, argList);
        break;
      case 'fnSpotsMovValue':
        value = fnSpotsMovValue(dataObj, argList);
        break;
      case 'fnNumNotIntValue':
        value = fnNumNotIntValue(dataObj, argList);
        break;
      case 'fnTakenCountValue':
        value = fnTakenCountValue(dataObj, argList);
        break;
      case 'fnPlayedCountValue':
        value = fnPlayedCountValue(dataObj, argList);
        break;
      case 'fnNotTakenCountValue':
        value = fnNotTakenCountValue(dataObj, argList);
        break;
      case 'fnNotPlayedCountValue':
        value = fnNotPlayedCountValue(dataObj, argList);
        break;
      case 'fnSpotsScheduledValue':
        value = fnSpotsScheduledValue(dataObj, argList);
        break;
      case 'fnSpotsPlayedValue':
        value = fnSpotsPlayedValue(dataObj, argList);
        break;
      case 'fnTimeValue':
        value = fnTimeValue(dataObj, argList);
        break;
      case 'fnLastPlayedOn':
        value = fnLastPlayedOn(dataObj, argList);
        break;
      case 'fnTakenOn':
        value = fnTakenOn(dataObj, argList);
        break;
      case 'fnScreenCodeValue':
        value = fnScreenCodeValue(dataObj, argList);
        break;
      case 'fnExpand':
        value = fnExpand(dataObj, argList);
        break;
      default:
        value = '';
    }
  }
  /*        
  // always use if -> else if -> else 
  // otherwise each condition is checked

  if (!Array.isArray(colValue) && colValue !== null) {
    value = colValue || ' ';
  }
  if (colValue === null) {
    value = '';
  } 
  */

  return value;
}

export default getValueFunction;