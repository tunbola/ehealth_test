//sample usage find_chars_NN('mandilas','mdandildds');
function find_chars_NN(string1, string2){
     var commmon_chars = '';
	 for(var i=0; i<string1.length; i++){
	      
	      for(var j=0; j< string2.length; j++){
             if(string1[i] == string2[j]){
               commmon_chars +=  string1[i];
              }

	      }

	 }
	 return commmon_chars;

}



function find_chars_N(string1, string2){
     var commmon_chars = '';
     var string2_array = string2.split("");
     var unique = string2_array.filter(onlyUnique);

	 for(var i=0; i<string1.length; i++){
	      
	      for(var j=0; j< string2.length; j++){
             if(string1[i] == unique[j]){
               commmon_chars +=  string1[i];
              }

	      }

	 }
	 return commmon_chars;

}


function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}
