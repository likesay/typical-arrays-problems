
exports.min = function min (array) {
  let minValue = null;
  if(array == null || array.length == 0){
return 0;
  }
  array.forEach(element => {
    if (minValue == null){
      minValue = element;
    } else if(element < minValue) {
      minValue = element;
    }
  });
  return minValue;
}

exports.max = function max (array) {
  let maxValue = null;
  if(array == null || array.length == 0){
    return 0;
      }
  array.forEach(element => {
    if (maxValue == null){
      maxValue = element;
    } else if(element > maxValue) {
      maxValue = element;
    }
  });
  return maxValue;
}

exports.avg = function avg (array) {
 let sum = 0;
 let count = 0;
 if(array == null || array.length == 0){
  return 0;
 }
 array.forEach(elem => {
   sum += elem;
   count += 1;
 });
 if(count == 0){
   return 0;
 }
  return sum/count;
}
