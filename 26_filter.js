const arrayOfnumbers = [2, 3, 5, 4, 6, 1];
let newArray = arrayOfnumbers.filter((element) => {
    return element >= 4;
});
console.log(newArray);
console.log("-------------reduce-----------------");
console.log("====== reduce()=====");
let sum = arrayOfnumbers.reduce((value, runningTotal) => {
    return value + runningTotal;
});
console.log(sum);
