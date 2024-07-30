console.log('External JavaScript');
document.write('Rashane Malsha');
document.write('<h2>Moratuwa<h2>');
document.write('<button>test</button> <br> <br>');
document.write('<input type="Text"/> <button>Submit</button> ');


// Data Types

//Numbers
const num = 10.5;

//String
const stri = "ABC";

//Boolean
const bool = false;

//Object
const obj = {name:'ABC', age:20};

//Array
const array = [[], false,'abc',100,[]];

//Variable Types

//let

let a = 10;
console.log(a);
a = 75;
{let ab = 100;}
{let a = 100;}
//console.log(ab)

console.log(a);

// let a = 20;


//var

var v = 10;
console.log(v);

var v = 20;
console.log(v);

v = 100;
console.log(v);

{var vv = 888}
console.log(vv);

{var vv = 555}
console.log(vv);

{var v = 200}
console.log(v);

vv = 5000;
console.log(vv);


//const

const c = 10;
console.log(c);

//const c = 20;

{const c = 100; console.log(c);} 

// {const co = 300;} 
// console.log(co);

// c = 500;
// console.log(c);


// Arithmetic Operators

const s = 20;
const d = 10;

//Addition
const add = s + d;
console.log(add);

//Subtraction
const sub = s - d;
console.log(sub);

//Multiplycation
const multi = s * d;
console.log(multi);

//Division
const div = s / d;
console.log(div);

//Mudular
const mod = s % d;
console.log(mod);

//Increment (++)
let h = 10;
h++;
console.log(h);

//Decrement (++)
let j = 10;
j--;
console.log(j);

//Comparison Operator
const l = '13';
const m = 13;

const r = 50;
const t = 30;


//Equal(==) (===)

console.log(l==m);
console.log(l===m);

//Not Equal (!=) (!==)
console.log(l != m);
console.log(l !== m);

//Greater than (>)
console.log(t>s);

//Lesser than (<)
console.log(t<s);

//Greater than or Equal to (>=)
console.log(t>=t);

//Lesser than or Equal to (<=)
console.log(s<=s);

//Logical Operators

const y = true;
const x = false;

//AND (&&)
console.log(y&&x);

//OR (||)
console.log(y||x);

//NOT (!)
console.log(!y);
console.log(!x);

//Flow Controllers
//If //Else

const stu1 = 400;
const stu2 = 220;
const stu3 = 160;

if (stu1 > 200){
    console.log('Student Passed');
}else
    console.log('Student Failed');

//If //Else //Else IF
    if (stu3 >= 200){
        console.log('Student Passed A');
    }else if(stu3 >= 150){
        console.log('Student Passed B');
    }else if(stu3 >= 100){
        console.log('Student Passed C');
    }else
        console.log('Student Failed');

//If //Else //Else IF //Nested IF

if (stu2 >= 200){
    if(stu2 >= 250 && stu2 <= 300){
        console.log('Student Passed A+ Range 250 - 300');
    }else
        console.log('Student Passed A Range 150 - 250'); 
}else if(stu2 >= 150){
    console.log('Student Passed B');
}else if(stu2 >= 100){
    console.log('Student Passed C');
}else
    console.log('Student Failed');


//Switch

const val ='JS';
switch (val) {
    case 'HTML':
        console.log('Hyper Text Markup Language');
        break;
        case 'CSS':
        console.log('Cascading Style Sheet');
        break;
        case 'JS':
        console.log('Java Script');
        break;
    default:
        console.log('Non');
        break;
}

const val1 ='PHP';
switch (val1) {
    case 'HTML':
        console.log('Hyper Text Markup Language');
        break;
        case 'CSS':
        console.log('Cascading Style Sheet');
        break;
        case 'JS':
        console.log('Java Script');
        break;
    default:
        console.log('Non');
        break;
}

//Array

const arr = [1,'ABC',true,{town:'Moratuwa'},[]];
console.log(arr[3]);
console.log(arr[15]);

//Array

//Pop()
const fruits1 = ["Orange","Apple","Watemelon"];
console.log(fruits1);
console.log(fruits1.pop());
console.log(fruits1);

//Push()
const fruits2 = ["Orange","Apple","Watemelon"];
console.log(fruits2);
fruits2.push("Mango");
console.log(fruits2);

//Shift()
const fruits3 = ["Orange","Apple","Watemelon"];
console.log(fruits3);
console.log(fruits3.shift());
console.log(fruits3);
console.log(fruits3[0]);

//Unshift()
const fruits4 = ["Orange","Apple","Watemelon"];
console.log(fruits4);
fruits4.unshift("Grapes");
console.log(fruits4);
console.log(fruits4[0]);

//Loops

//For Loop

for(let x = 0; x < 10; x++){
    console.log(x);
}

const arr1 = [23,11,30,6,13,3,24,8]

for(let x = 0; x < arr1.length; x++){
    console.log(arr1[x]);
}

//Break

for(let x = 0; x < arr1.length; x++){
    if(arr1[x] == 6){
        break;
    }
    console.log(arr1[x]);
}

//Continue

for(let x = 0; x < arr1.length; x++){
    if(arr1[x] == 6){
        continue;
    }
    console.log(arr1[x]);
}

//While Loop

let st = 0;
while(st <  arr1.length){
    console.log(arr1[st]);
    st++;
}

//Do While Loop

let st1 = 0;
do{
    console.log(arr1[st1]);
    st1++;
}while (st1 < arr1.length);

let st2 = 0;
do{
    st2++;
    console.log(arr1[st2]);
    
}while (st2 < arr1.length);

//Foreach/Map/Filter

arr1.forEach((val,index)=>{
    console.log(val);
    console.log(index);
})

arr1.map((val,index)=>{
    console.log(index);
})
    
arr1.filter((val,index)=>{
    console.log(val);
})
    
//object

let car ={
    brand:'bmw',
    color:'Red',
    seats:4,
    drive:function(){
        console.log("Driving");
    }
}

console.log(car.color);
car.drive();

//Function

//Name Function
function PrintName() {
    console.log("Hello Name Function");
}

PrintName();

//Anonymous Function
let mark = function(){
    console.log("Hello Anonymous Function");
}
    
mark();

//Arrow Function
let score = () => {
    console.log("Hello Arrow Function");
}

score();

//Functions With Parameters

//Name Function With Parameters
function addnumbers (num1, num2){
    tot = num1 + num2;
    console.log(tot);
}

addnumbers(50,150);
addnumbers(5000,600);

//Anonymous Function With Parameters
let total1 = function(num11, num12){
    total = num11 + num12;
    console.log(total);
}

total1(200,500);
total1(200,1000);

//Arrow Function With Parameters
let total10 = (num20, num30) => {
    total100 = num20 + num30;
    console.log(total100);
}

total10(4200,8000);
total10(2000,8000);

//Return

//Name Function With Parameters and return
function tol (number1,number2){
    number3 = number1 + number2;
    return number3
}

let tol1 = tol(5000,2500)
console.log(tol1);

console.log(tol(5000,2500));

//Arrow Function With Parameters and return(In this case no need brackets)
let tota = (numb1,numb2) => numb1 + numb2;

console.log(tota(700,500));
console.log(tota(700,1500));

//Input Student Name and Marks > 60
//Print => Kamal is Passed/Failed

let exam = (name,mark) => {
    if(mark > 60){
        return (name + " is Passed");
    }else
    return (name + " is Failed");
}

console.log(exam("Kamal",75));
console.log(exam("Amal",55));

//Events

//onclick
function onClick()  {
    alert('Click Alert Working')
};

function onClick2() {
    console.log("Click Console Working");
};

//onchange
function onChange() {
    console.log("On change Working");
    let val3 = document.getElementById('change').value
    console.log(val3);

    //console.log( document.getElementById('change').value);
}

//onmouseover

function mouseover(){
    console.log("Onmouseover console working");
    document.getElementById('mouse').style.backgroundColor='blue';

}

//onmouseout

function mouseout(){
    console.log("Onmouseout console working");
    document.getElementById('mouse').style.backgroundColor='green';

}

//onkeydown

function keydown(){
    console.log("OnKeyDown Console Working");
    const letter = document.getElementById("key").value
    console.log(letter);
    document.getElementById("displaydown").innerHTML = letter;
}

//onkeypress

function keypress(){
    console.log("OnKeyPress Console Working");
    const letter = document.getElementById("key").value
    console.log(letter);
    document.getElementById("displaypress").innerHTML = letter;
}

//onkeyup

function keyup(){
    console.log("OnKeyUp Console Working");
    const letter = document.getElementById("key").value
    console.log(letter);
    document.getElementById("displayup").innerHTML = letter;
}

function onmouseover3(){
    console.log("Onmouse Over working");
    document.getElementById('mj').style.display = 'block'
    document.getElementById("lbj").style.display = 'none'  
}

function onmouseout3(){
    console.log("Onmouse out working");
    document.getElementById('mj').style.display = 'none'
    document.getElementById("lbj").style.display = 'block'  
}

function valid(){
    const v = document.getElementById('valid').value
    const reg = /^\d+$/;

    if(reg.test(v)){
        console.log('Success....!');
        document.getElementById('error').innerText = "Valid"
        document.getElementById('error').style.color = "green"
    }else{
        console.log('Fail....!');
        document.getElementById('error').innerText = "Invalid"
        document.getElementById('error').style.color = "red"
    }
    }
        