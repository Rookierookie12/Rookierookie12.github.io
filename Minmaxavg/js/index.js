var arr = [2, 15, 8]
var max = arr[0];
var min = arr[0];
var sum = arr[0]; 
for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    else if (arr[i] < min) {
        min = arr[i];
    }
    sum = sum + arr[i];
}
console.log('max=' +max)
console.log('min='  +min)
console.log('avg=' +sum/arr.length) 