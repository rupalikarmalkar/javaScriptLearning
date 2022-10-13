var num_var=function(num1,num2){
   var gretest_num= num1 > num2 ? num1 : num2;
   console.log(`The greatest number is ${gretest_num}`);
}
num_var(10,-10);
num_var(800,899)
console.log("---------------------------------------------");

var even_odd=function(num){
    var even_odd_var=num % 2 ==0 ? ' True' : ' False';
    var result= console.log(`The no.${num} is ====>${even_odd_var}`);
}
    
even_odd(29);


even_odd(44);
even_odd(0);
even_odd(101);
console.log("---------------------------------------------");

var str_even_odd=function(arg){
    var total_len=arg.length;
    var string_even_or_odd = total_len % 2 == 0 ? 'even':'odd';
    console.log(string_even_or_odd);
   }

   var three_str=function(arg1){
    var total_length=arg1.length;
    var result=total_length % 2 ==0 ? "even":"odd";
    console.log(`The length of ${arg1} is ${result}`);
   }
   three_str("javascript");
   three_str("Google");
   three_str("Developer");
   console.log("---------------------------------------------");

   var two_num_length=function(arg2){
    var two_no_lent=arg2.length;
    var two_no_odd_even=two_no_lent % 2 == 0 ? "even":"odd";
    console.log(`The length `);

   }



