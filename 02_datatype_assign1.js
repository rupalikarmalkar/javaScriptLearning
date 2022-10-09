function my_details(){
    console.log("Rupali Ravindra Karmalkar---------fun1");
}
my_details();
console.log("------------------------");
function my_degree(){
    console.log("Hello Friends,How are you?--------fun2");
}

my_degree();
console.log("------------------------");
function my_name(firstname,lastname){
    console.log("My name is:-" ,firstname +lastname);

} 
my_name("Rupali","Karmalkar")
console.log("------------------------");
function swap_values(a,b){
    console.log("Before swap;-",a,b);

    temp=a;
    a=b;
    b=temp;
    console.log("------------------------");
    console.log("After swap;-",a,b);
    console.log("------------------------");


}
swap_values("virat","Anushka")
console.log("------------------------");

swap_values(1000,2000)

function add_three_num(num1,num2,num3){
    console.log("the nunbers are:-",num1,num2,num3);
     var total=num1+num2+num3;
     console.log(total);


}
add_three_num(100,200,250);
console.log("------------------------");

add_three_num(10.23,600,40);
console.log("------------------------");

add_three_num("Hello","Good","Morning")
console.log("------------------------");

