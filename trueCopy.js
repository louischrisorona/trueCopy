function trueCopy(object){
  let copy = JSON.parse(JSON.stringify(object));
  return trueCopy;
}
