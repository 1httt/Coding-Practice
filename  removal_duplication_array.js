let arr = [2,3,4,5,2,2,3,4,5]
const unique0 = function(arr){
    let s = new Set(arr);
    let res = [...s]
    return res;
}

const unique1 = function(arr){
    let res = [];
    for(let item of arr){
        if(res.indexOf(item) === -1){
            res.push(item)
        }
    }
    return res;
}

const unique2 = function(arr){
    let res = [];
    arr.sort((a,b) => a-b)
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== arr[i-1]){
            res.push(arr[i]);
        }
    }
    return res;
}

console.log(unique2(arr));