module.exports = function longestConsecutiveLength(array) { //module.exports =

  array.sort(function(a,b){return a - b;})

  var curentLength = 1, longestLength = 0;

  for(var i = 0; i < array.length; i++){
      if(array[i] == array[i + 1]) continue;
      if(array[i] + 1 == array[i + 1])
        curentLength++;
      else{
        if(curentLength > longestLength)
            longestLength = curentLength;
      curentLength = 1;
      }
  }

  return longestLength;
}
