var bubbleSorting = function(arr) { 
   for(var i = 0; i < arr.length; i++) {

   for(var j = 0; j < (arr.length - i - 1); j++) {
	if(arr[j] > arr[j + 1]) {
	var temp;
	temp = arr[j + 1];
	arr[j + 1] = arr[j];
	arr[j] = temp; 
		}
	}
   }
	console.log(arr);
}
