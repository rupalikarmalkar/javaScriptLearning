let map = new Map();
map.set(22,"Sachin");
map.set(11,"Dravid");
map.set(33,"Gangully");
map.set(77,"Sehewag");
console.log(map);
console.log("-------------adding duplicate value----------");
map.set(11,"Gautam");
console.log(map);
console.log("-------------adding duplicate key and value----------");
map.set(33,"Gangully");
console.log(map);
console.log("-----------------Is key available---------------------");
 console.log(map.has(77));      ;

console.log("----------------Retrive value-----------------");
let value=map.get(33);
console.log(value);
console.log(map.get(99));
console.log("----------------delete record-----------------");

map.delete(11);
console.log(map);
console.log("------ Traversing over map collection --------");
let setOfKeys = map.keys();
console.log(setOfKeys);
for (const key of setOfKeys) {
    console.log(map.get(key));
}


class Person {
    constructor(rollNo, fullName, city, age, gender){
        this.rollNo = rollNo;
      this.fullName =   fullName;
      this.city = city;
      this.age = age;
      this.gender = gender;
    }
    details(){
        console.log(`Person Details: ${this.rollNo}  ${this.fullName}  ${this.city}  ${this.age}  ${this.gender}`);
    }
}
let personAnil = new Person(22,"Anil Mohite", "Pune", 31, "Male");
let personAnita = new Person(33, "Anita Golate", "Mumbai", 22, "Female");
let personBill = new Person(44, "Billgates", "USA", 67, "Male");

