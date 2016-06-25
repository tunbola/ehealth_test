//sample usage rotate_array([1,2,3,4,5,6], 2)
function rotate_array(input_array, n_position){
    
     var output_array = [];
     var N = n_position; 
    for (var i = 0; i < input_array.length; i++) {
            var value = input_array.length - N;
            if (N != 0) {
                output_array[i] = input_array[value];
                N--;
            } else {
                output_array[i] = input_array[i - n_position];
            }
            
     }


        for (var i = 0; i < output_array.length; i++) {
            var j = output_array[i];
            console.log(j+" ");
            
        }

     return output_array;


}
