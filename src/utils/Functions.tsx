// convert string to boolean
export const stringToBool = (string: string) => {
  if (string.toUpperCase() === "TRUE") return true;
  else if (string.toUpperCase() === "FALSE") return false;
  else return undefined;
};