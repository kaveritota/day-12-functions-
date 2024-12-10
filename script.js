// 1.define function with 2 parameters and return their sum
function additionOfTwo(a,b){
    return a+b;
}
var result=additionOfTwo(20,30);
console.log(`a+b is :${result}`);
console.log("--------------------------------------------------------------------")
// 2.define a function that accepts string as parameter ,and modify string to uppercase
function convertUppercase(message){
    console.log(message.toUpperCase());
}
convertUppercase("hello javascript!!!!");
console.log("--------------------------------------------------------------------");
// 3.what happens if you pass an undefined value as an argument to a function that expects a parameter
function start(message1){
    console.log(message1);
}
start("undefined");
console.log("--------------------------------------------------------------------")
// 4.function that takes array as a parameter ,how would you check inside the function if the array is empty
function arrayAsParameter(arr){
if(arr.length==0){
    console.log("array is Empty");
}
else{
    console.log("Not Empty")
}
}
arrayAsParameter([1,2,3,4]);
console.log("----------------------------------------------------------------------")
// 5.write a function that takes 2 numbers as parameters and return their difference
function diffOfTwo(x,y){
    return x-y;
}
console.log(`x-y is:${diffOfTwo(50,30)}`);
console.log("---------------------------------------------------------------------")
// 6.function that accepts name and age as parameters and return a string with greeting like "Hello,[name]!You are [age]years old."
function greeting(name,age){
    return name;
}
console.log(`Hello,${greeting("Riya")}!You are ${greeting(20)} years old.`)
console.log("---------------------------------------------------------------------")
// 7.write a function that takes a number as a parameter and returns true if the number is even otherwise false
function checkEvenOrOdd(num){
    if(num%2==0){
        console.log("true");
    }
    else{
        console.log("false");
    }
}
checkEvenOrOdd(21);


