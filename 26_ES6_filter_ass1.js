const array_number = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
const new_array = array_number.filter((element) => {
    return element > 50;

});
console.log(`The given array is  : ${array_number}`);
console.log(" ");
console.log(`____________________Number > 50__________________________`);
console.log(" ");

console.log(`The numbers is : ${new_array}`);
console.log(`____________________Even numbers__________________________`);
const even_array = array_number.filter((element) => {
    if (element % 2 == 0) {
        console.log(`The number is : ${element}`);
    }

});
console.log(`____________________Multiple of 5 __________________________`);
const mul_array = array_number.filter((element) => {
    if (element % 5 == 0) {
        console.log(`The element is :${element}`);

    }
});
console.log(`____________________The Numbers between 20 & 50____________`);
const beetwen_array = array_number.filter((element) => {
    if (element >= 20 && element <= 50) {
        console.log(element);

    }

});
console.log(`_______________Sum of array using Reduce_________________`);

const sum = array_number.reduce((runningTotal, value) => {
    return runningTotal + value

});
console.log(`Sum=${sum}`);
console.log(`__________Sum of even numbers using Filter & Reduce_________________`);
const evenArray = [20, 40, 25, 90, 60];

const evenFilter_array = evenArray.reduce((runningSum, value) => {
    return runningSum + value;

}, 0);
console.log(`Total = ${evenFilter_array}`);


