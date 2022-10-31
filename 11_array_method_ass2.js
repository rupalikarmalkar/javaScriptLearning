const array_numbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`Given array: ${array_numbers}`);
console.log("1)--------------lenght of array--------------------------------");

let array_len = array_numbers.length;
console.log(`Lenght of array:${array_len}`);
console.log("2)---------------first and last number--------------------------------");
let first_ele=array_numbers[0];
console.log(`first element :${first_ele}`);
let last_ele= array_numbers[10];
console.log(`last element :${last_ele}`);
console.log("3)---------------first and last number--------------------------------");
let last_third=array_numbers[array_numbers.length-3];
console.log(`third last element:${last_third}`);

console.log("4)------------all even numbers from array-----------------------------------");
var r=" ";
for (let index = 0; index < array_len; index++) {
if (array_numbers[index]%2==0) {
r=r+" "+ array_numbers[index]    
}
    
}
console.log(`all even numbers of array :${r}`);
console.log("5)------------all odd numbers from array-----------------------------------");
 
var r=" ";
for (let index = 0; index < array_len; index++) {
if (array_numbers[index]%2!==0) {
r=r+" "+ array_numbers[index]    
}
    
}
console.log(`all odd numbers of array :${r}`);
console.log(`6)----------------------------even position numbers------------------------------------------`);
var r=" ";
for (let index = 0; index < array_len; index++) {
if ([index]%2==0) {
r=r+" "+ array_numbers[index]    
}
    
}
console.log(`all odd numbers of array :${r}`);
console.log(`7)----------------------------odd position numbers------------------------------------------`);
var r=" ";
for (let index = 0; index < array_len; index++) {
if ([index]%2!==0) {
r=r+" "+ array_numbers[index]    
}
    
}
console.log(`all odd numbers of array :${r}`);
console.log("8)------------------------------------------sum of elements---------------------------------------------------");
var sum=0;
for (let index = 0; index < array_len; index++) {
    
    sum=sum +array_numbers[index];
}
console.log(`the sum of elements :${sum}`);
console.log("9)------------------------------------------multiple of 5---------------------------------------------------");
for (let index = 0; index < array_len; index++) {
    if (array_numbers[index]%5==0) {
        console.log(array_numbers[index]);
        
    }
}
console.log("10)-------------------------------------------------------115 is available --------------------------------------");
array_numbers.includes(115);
console.log(array_numbers.includes(115));
console.log("10)------------------------------------------23 is available --------------------------------------");
console.log(array_numbers.includes(23));
