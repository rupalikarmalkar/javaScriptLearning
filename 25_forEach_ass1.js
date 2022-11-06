const array_numbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(`___________________Given Array_________________________________________`);
console.log(`Given array : ${array_numbers}`);
console.log(`____________________Elements & index ________________________________________`);

array_numbers.forEach((value, index) => {
    console.log(`Elements : ${value}  index:${index}`);
});
console.log(`____________________ _______________Positive Numbers_________________________`);
array_numbers.forEach((value, index) => {
    if (value > 0) {

        console.log(`Elements : ${value} `);
    }
});
console.log(`____________________ _______________Negative Numbers_________________________`);
array_numbers.forEach((value, index) => {
    if (value < 0) {

        console.log(`Elements : ${value} `);
    }
});

console.log(`____________________ _______________Even   Numbers_________________________`);
array_numbers.forEach((value, index) => {
    if (value % 2 == 0) {

        console.log(`Elements : ${value} index: ${index}`);
    }
});
console.log(`____________________ _______________Sum  Numbers_________________________`);
let sum = array_numbers.reduce((value, runnimgvalue) => {
    return value + runnimgvalue
});
console.log(`The sum of array elements : ${sum}`);


console.log(`____________________ _______________Even  position Numbers_________________________`);
array_numbers.forEach((value, index) => {
    if (index % 2 == 0) {

        console.log(`Elements : ${value} index: ${index}`);
    }
});
console.log(`____________________ _______________Odd position Numbers_________________________`);
array_numbers.forEach((value, index) => {
    if (index % 2 !== 0) {

        console.log(`Elements : ${value} index: ${index}`);
    }
});