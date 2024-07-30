let arr = [];
function numbers(){
    for (var i=0, t=100; i<t; i++) {
    arr.push(Math.round(Math.random() * t))
}
    console.log(arr);
    document.getElementById('display1').innerText = arr;
}

numbers();

function clicknumber(){
const num = document.getElementById('txt').value;

   let filterarr = []
    for(let x = 0; x < arr.length; x++){
        if(arr[x] % num == 0){
            filterarr.push(arr[x]);
        }
    }
    document.getElementById('display2').innerText = filterarr;
    
}