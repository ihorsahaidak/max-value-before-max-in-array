
//https://docs.google.com/document/d/10HWgzs69LvqzIb4kHcEWC6-nfI45kKGO6Gv0-dGVaKw/edit
function beforeMax(arr) 
{
	var first, 
		second, 
		k=0;
		first = second = -Infinity;
console.log(arr);
	for (var i = 0; i < arr.length; i++)
	{
		if (arr[i] > second)
		{
			first = second;
			second = arr[i];
		}
		else if (arr[i] > first && arr[i] != second)
		{
			first = arr[i];
		}
		if(arr[0] == arr[i])
		{
			k++;
		}
		if(k == arr.length)
		{
			first = null;
			return first;
		}

	}

return first;
}

var arr = new Array(5, 5, 5, 5, 5);
console.log("array["+arr+"] = "+beforeMax(arr));

var arr1 = new Array(); arr1[0]=5;
console.log("array["+arr1+"] = "+beforeMax(arr1));

var arr2 = new Array(-1, -2, -3, -4, -5, -5);
console.log("array["+arr2+"] = "+beforeMax(arr2));

var arr3 = new Array(1, 1, 1, 1, 5, 5);
console.log("array["+arr3+"] = "+beforeMax(arr3));

var arr4 = new Array(5, 5, 1, 1, 1, 1);
console.log("array["+arr4+"] = "+beforeMax(arr4));

var arr5 = new Array(1, 2, 3);
console.log("array["+arr5+"] = "+beforeMax(arr5));

var arr6 = new Array(3, 2, 1);
console.log("array["+arr6+"] = "+beforeMax(arr6));

var arr7 = new Array(3, 1);
console.log("array["+arr7+"] = "+beforeMax(arr7));

var arr8 = new Array(1, 3);
console.log("array["+arr8+"] = "+beforeMax(arr8));