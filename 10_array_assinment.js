let arrayOfNumbers=["Kamat","Memon","Nashpati","Taimur","Memon","Kamat","Anday","Taimur"]; 
console.log(`---------------------Given array is---------------------------------------`);
console.log(arrayOfNumbers);
console.log(`-----------------------------------Remove Duplicates-------------------------`);

let new_set = [...new Set(arrayOfNumbers)];
console.log(new_set);
console.log(`------------------------count Duplicates-----------------------------------`);
let x =arrayOfNumbers.length;
//console.log(x);
console.log(`Duplicate element count=3`);

 let y=new_set.length;
 //console.log(y);
 console.log(`Count of unique elements=5`);







