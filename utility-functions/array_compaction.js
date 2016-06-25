function array_compaction(sorted_array){

  var unique_array = sorted_array.filter(onlyUnique);
  return unique_array;
}


function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}