function alwaysHungry(arr) {
    
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == "food") {
            console.log("yummy");
        } else {
            console.log("I'm hungry");
        }
    }
}


// 2 high pass filter

function highPass (arr, cutoff){
    var filteredArr= [];
    
    for(var i=0 ; i<arr.length ; i++){
        if(arr[i]>cutoffvalue){
        filteredArr.push (arr[i])
        }
        return filteredArr;
    }
}

// 3 Better than average


    
    function sumElements (arr){
        var sum=0;
    for(var i=0 ; i<arr.length ; i++){
        sum = sum + arr[i]
        console.log (sum)
    }
    var avg=sum/arr.length;

    var count=0
    for(var i=0 ; i<arr.length ; i++){
        if(arr[i]>avg){
            count++;
        }
    }
    return count;
}


    console.log (sumElements ([6,8,3,10,-2,5,9]))

    // 4 array reverse

    
    function reverse(arr) {
        let reversedArray = [];
        let length = arr.length;

    for (let i = 0; i < length; i++) {
        reversedArray.push(arr.pop());

    }

    return reversedArray;
}
console.log (reverse ([3,5,1,4,67,7]))
 
function fibonacciArray(n){
    var fibArr =[0,1];
    if (n <= 1) {
        return fibArr.slice(0, n);
    }
    
    for (var i = 2; i < n; i++) {
        fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
    }
    
    return fibArr;
}