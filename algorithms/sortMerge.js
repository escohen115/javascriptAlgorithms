
// function mergeSort(arr){
//     if (arr.length <= 1) return arr
//     let mid = Math.floor(arr.length/2)
//     let arr1 = arr.slice(0,mid)
//     let arr2 = arr.slice(mid)
//     return merge (mergeSort(arr1), mergeSort(arr2))
// }


// mergeSort([6,3,2,1,4,5,0])


function mergeSort(arr){
    if (arr.length <= 1){
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let arr1 = arr.slice(0,mid)
    let arr2 = arr.slice(mid)
    
    return merge(mergeSort(arr1), mergeSort(arr2))  
}



function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}



console.log(mergeSort([5,3,4,2,1]))
// console.log(merge([1,3,5,7,9],[2,4,6,8,10,12,14]))


