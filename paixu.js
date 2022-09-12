let arr = [3, 1, 100, 9, 4, 5, 4, 6, 8, 8];

let mp = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let tem = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tem;
            }
        }
    }
    return arr;
}

let xz = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tem = arr[i];
            arr[i] = arr[min];
            arr[min] = tem;
        }
    }
    return arr;
}

let cr = function (arr) {
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i+1; j>0; j--) {
            if (arr[j] < arr[j-1]) {
                let tem = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = tem;
            }else{
                break
            }
        }
    }
}

let xe = function(arr){
    let incre = arr.length;
    while(1){
        incre = Math.floor(incre/2);
        for(let i=0; i<incre; i++){
            for(let j=0; j<arr.length; j+=incre){
                for(let k=j+incre; k>0; k-=incre){
                    if(arr[k] < arr[k-incre]){
                        let tem = arr[k];
                        arr[k] = arr[k-incre];
                        arr[k-incre] = tem;
                        console.log(arr)
                    }else{
                        break;
                    }
                }
            }
        }
        if(incre === 1){
            break;
        }
    }
}

let quick = function(arr, l ,r){
    if(l>=r){
        return;
    }
    let i = l;
    let j = r;
    let key = arr[l];
    while(i<j){
        while(i<j && key <= arr[j]){
            j--;
        }
        if(i<j){
            arr[i] = arr[j];
            i++;
        }
        while(i<j && key > arr[i]){
            i++;
        }
        if(i<j){
            arr[j] = arr[i];
            j--;
        }

    }
    arr[i] = key;
    console.log(arr);
    quick(arr, l, i-1);
    quick(arr, i+1, r);
}



kp(arr, 0, arr.length-1)
arr