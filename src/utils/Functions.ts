// convert string to boolean
export const stringToBool = (string: string) => {
  if (string.toUpperCase() === "TRUE") return true;
  else if (string.toUpperCase() === "FALSE") return false;
  else return undefined;
};

// check if object is empty
export const isEmpty = (object: any) => {
  if (object === null || object === undefined) return !object;
  else if (typeof object === "string" || Array.isArray(object))
    return object.length === 0;
  else if (typeof object === 'number') return isNaN(object);
  else if (typeof object === "object") return Object.keys(object).length === 0;
  else return !object;
};

// get item by property from array
export const getItemFromArr = (array: Array<any>, property: string, threshold: any) => {
  if (array == undefined || (array && array.length == 0)) return {};
  if (property.length) {
    let res = array.find(item => item[property] == threshold)
    return res == undefined ? {} : res;
  } else {
    let res = array.find(item => item == threshold)
    return res == undefined ? "" : res;
  }
}