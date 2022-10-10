console.log("The given numbers are=",5,6,25,100);
console.log(".......................................................");

var fun_var= function(num) {
    console.log("The square of given number is=",num*num);

}
fun_var(5);
fun_var(6);
fun_var(25);
fun_var(100);
console.log(".......................................................");
var taingle_var = function(num1,num2) {
    console.log("The area of Traingle=",1/2*num1*num2);

}
taingle_var(34,45);
console.log(".......................................................");
var rectangle=function(num1,num2){
    console.log("The area of Rectangle is=", num1*num2);
}
rectangle(499,917);
console.log(".......................................................");
var string_var="JavaScript the most popular language"
console.log(string_var);
var count=string_var.length;
console.log( "The length of given string is=" ,count);
var index_var=string_var.indexOf("S");
console.log( "The index of S is=",index_var);
var index_lang=string_var.indexOf("lang")
console.log( "The index of lang is=",index_lang);
var last_char=string_var.charAt(count-1)
console.log("The last character is=",last_char);
var char_last3=string_var.charAt(count-3)
console.log("The 3rd last character is=",char_last3);
console.log(".......................................................");
function swap_value(arg1,arg2){
    console.log("The values before swap  =",arg1,arg2);
    temp=arg1;
    arg1=arg2;
    arg2=temp;
    console.log("The values after swap  =",arg1,arg2);


}
swap_value("Virat"," Anushka");



