const string=["India", "France", "United States of America"]

function longstring(arr){
    let result='';
    for(let i=0; i<arr.length;i++){
        let currentitem=arr[i];
        if(currentitem.length>result.length){
            result=arr[i]
        }
    }
    return result;
}
console.log(longstring(string))