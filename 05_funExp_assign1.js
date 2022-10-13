

var str1=function(arg1){
    console.log(`The given string is ${arg1}`); 
    var str1_len=arg1.length;
    console.log(`The length = ${str1_len}`);
    var str1_square=str1_len * str1_len;
    console.log(`The square = ${str1_square}`);
    console.log("------------------------------------------------");


}
str1("JavaScript");
str1("Google");
str1("Developer");


var rverse_string=function(){
   var reverseString= "I am Angular Developer";
   console.log(reverseString);
   var output=reverseString.split('').reverse().join('');
   console.log(output);

}
rverse_string();

console.log("------------------------------------------------");


var divide_len=function(){
    var str4="I am Angular Developer";
    console.log(`Given string is "I am Angular Developer"`);
    var total_len=str4.length;
    console.log(`Total length=${total_len}`);
    var split_result=str4.split(" ");
    // console.log(``split_result``);
     var word_count=split_result.length;
    console.log(`Total no. of words=${word_count}`);
    var div_var=total_len/word_count;
    console.log(`Result after total length is divided by total no.of words=${div_var}`);
    var multiply=total_len * word_count;
    console.log(`Maultiplication of lenth and words is=${multiply}`);
}
 divide_len();
 console.log("------------------------------------------------");

