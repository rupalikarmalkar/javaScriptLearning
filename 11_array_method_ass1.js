console.log(`1)---------------starting and ending element---------------------------`);

let fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
let starting_ele = fruits_seasonal.slice(0,1)
let last_ele = fruits_seasonal.slice(4)
console.log(`Given array is :${fruits_seasonal}`);
console.log(`First element is :${starting_ele}`);
console.log(`First element is :${last_ele}`);

console.log(`2)----------------add Papaya before Banana--------------------------`);


  fruits_seasonal.unshift("Papaya");
  console.log(fruits_seasonal);

console.log(`3)----------------remove Mango--------------------------`);
 fruits_seasonal.splice(4,1,)
console.log(fruits_seasonal);

console.log(`4)-------------------add pineapple at last------------------------------------`);

  fruits_seasonal.splice(5,1,"Pineapple");
console.log(fruits_seasonal);

console.log(`5)-------------------add Dragon fruit before water melon-------------------------------------------------`);


  fruits_seasonal.splice(3,1,"Dragon Fruit");
console.log(fruits_seasonal);

console.log(`------------------------ replace orange with kiwi--------------------------------------------`);
  fruits_seasonal.splice(2,1,"Kiwi");
console.log(  fruits_seasonal);

console.log(`--------------------------1 to 4 elements-------------------------------------------`);

  const middle_fruits = fruits_seasonal.slice(1,4);
console.log(middle_fruits);

console.log(`--------------------------last 3 elements-------------------------------------------`);
let last_three=fruits_seasonal.slice(3);
console.log(last_three);


