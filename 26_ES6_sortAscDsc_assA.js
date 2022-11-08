const array_roll_numbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
array_roll_numbers.reverse();
console.log(`Given array : ${array_roll_numbers}`);
console.log(`______________________Revers Array________________________________`);
console.log("");
console.log(`Reverse array : ${array_roll_numbers}`);
console.log(`______________________Sort Array________________________________`);
console.log("");
array_roll_numbers.sort();
console.log(`sorted array :  ${array_roll_numbers}`);
array_roll_numbers.sort((a, b) => {
    return a > b ? -1 : 1;

});
console.log("");

console.log(`______________________ Descending using sort  Array________________________________`);

console.log(`Descending array :${array_roll_numbers}`);
console.log("");

console.log(`______________________  using reverse() Array________________________________`);
array_roll_numbers.reverse();
console.log(`Array is : ${array_roll_numbers}`);
console.log(`______________________ Greatest Number  ________________________________`);
const a = array_roll_numbers[8];
console.log(a);
console.log(`______________________ Smallest  Number  ________________________________`);
const b = array_roll_numbers[0];
console.log(b);
console.log(`______________________ Remove Duplicates  Number  ________________________________`);
let new_array = new Set(array_roll_numbers);
console.log(`Remove duplicate elements: `, new_array);