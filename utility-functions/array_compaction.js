//sample usage array_compaction([1,1,2,2,3,3,4,4,5,5]);
function array_compaction(sorted_array){

  var unique_array = sorted_array.filter(onlyUnique);
  return unique_array;
}


function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}