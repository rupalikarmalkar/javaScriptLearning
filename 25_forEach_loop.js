const arrayNumber = [10, 20, 30, 40, 20, 10];
arrayNumber.forEach(function (currentValue, index, array) {
    console.log(currentValue, index, array);
})
arrayNumber.forEach((currentValue, index) => {
    console.log(currentValue, index);
})
console.log("____________________negative Numbers__________________________");
const aarrayNumber = [10, -20, 30, 40, 20, -10];
aarrayNumber.forEach((currentValue, index) => {
    if (currentValue < 0) {
        console.log(currentValue, index);
    }
})
console.log("----------------set travers------------------------");
const setofNumber = new Set(aarrayNumber);
setofNumber.forEach((value) => {
    console.log(value);
})
console.log("____________________________________________________");

console.log("===== Traversing map using forEach() =====");
let map = new Map();
map.set(22, "Sachin");
map.set(11, "Dravid");
map.set(33, "Gaungully");
map.set(77, "Dravid");
map.forEach((key, value) => {
    console.log(key, value);
});

class Person {
    constructor(fullName, city, age, gender) {
        this.fullName = fullName;
        this.city = city;
        this.age = age;
        this.gender = gender;
    }
    details() {
        console.log(`Person Details: ${this.fullName}  ${this.city}  ${this.age}  ${this.gender}`);
    }
}
let personAnil = new Person("Anil Mohite", "Pune", 31, "Male");
let personAnita = new Person("Anita Golate", "Mumbai", 22, "Female");
let personBill = new Person("Billgates", "USA", 67, "Male");

const array = [personAnil, personAnita, personBill];
