console.log(`1)-----------------Massage---------------------------`);

let print_msg = () => {
    console.log("Good Morning,Today is Friday");
}
print_msg();
console.log(`2)-----------------Multiplication---------------------------`);
let multiply = (n1, n2, n3 = 1) => {
    console.log(`Multiplication  is = ${n1 * n2 * n3}`);

}
multiply(5, 5, 2);
multiply(10, 4);

console.log(`3)-----------------Addition of numbers--------------------------`);
let add = (n1, n2, n3, n4, n5) => {
    console.log(`Addition of given no is=${n1 + n2 + n3 + n4 + n5}`);

}
add(100, 100, 200, 349, 756);

console.log(`4)-----------------Addition of string--------------------------`);
let add_string = (arg1, arg2, arg3, arg4, arg5) => {
    console.log(`Addition of string is=${arg1 + arg2 + arg3 + arg4 + arg5}`);
}
add_string("I am ", "Learning", " ES6", " fetures", " in depth");