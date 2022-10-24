let myname="pune";

let mohitPerson={
    fullName:"Sachin Tendulkar",
    city:"Mumbai",
    age:42

}
console.log("============================");
let isAvailable = "fullName" in mohitPerson;
console.log(isAvailable);
console.log("city" in mohitPerson);
console.log("===========================");
let person={
    fullName:"Sachin Tendulkar",
    city:"Mumbai",
    age:42,
    isMarried:true,
      address:{
        street:"AS club",
        pinCode:454895,
        city:"Pune",
        state:"MH"

    },
        
    eat:function(){
        console.log("I am vegetatian");
    },

    details:function(){
        console.log(`${this.fullName},${this.city},${this.city}`);
    }

}
console.log(typeof person);
console.log(person.address)
console.log(person.address.state);
person.address.landmark="Main Road";



console.table(person);
let sachinfullName=person.fullName;
console.log(sachinfullName);
console.log(person.fullName);
console.log(person.city); 
console.log(person.age);

console.log("-------------------add property-------------------------");
person.pinCode=123456;
console.table(person);
person.profession="Cricketer";
console.table(person);

console.log("--------------------update--------------------");
person.fullName="Sachin Ramesh Tendulkar";
console.log(person.fullName);
person.profession="Angular Devloper"
console.log(person.profession);
console.log("--------------------delet--------------------");
  delete person.age;

let collegeAbc={

}
console.log(collegeAbc);