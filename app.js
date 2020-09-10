export const originalArray = (arr) =>{
  return arr
}

export function doubleArray(arr) {
  let doubleArray = arr.map((num) =>{
    return num * 2;
  })
  return doubleArray;
}