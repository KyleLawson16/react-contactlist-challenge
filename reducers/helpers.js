function insertItem(array, item) {
  let newArray = array.slice();
  newArray.push(item);
  return newArray;
}

function removeItem(array, index) {
  let newArray = array.slice();
  newArray.splice(index, 1);
  return newArray;
}

export { insertItem, removeItem };
