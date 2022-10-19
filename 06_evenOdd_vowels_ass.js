function evenPositionedChar(arg){
    var stm=arg.toLowerCase();
    var stt=stm.charAt(0);
    var store_value="";

    for (let index = 0; index < stm.length; index++) {
        if (index%2==0 && stm!=" ") {
            
            store_value  =store_value+stm.charAt(index);
        }

     }
    console.log(store_value);
}
evenPositionedChar("Hard work always pays back");
oddPositionedChar(`Soon I will be Angular IT Champ`);

console.log("-------------------------------------------------------");

function oddPositionedChar(arg){
    

    var stm=arg.toLowerCase();
    var stt=stm.charAt(0);
    var store_value="";

    for (let index = 0; index < stm.length; index++) {
        if (index%2 !=0 && stm!=" ") {
            
            store_value  =store_value+stm.charAt(index);
        }

     }
    console.log(store_value);
}
oddPositionedChar("Hard work always pays back");
oddPositionedChar(`Soon I will be Angular IT Champ`);

// Count the total number vowels using includes() for string → “Good Morning IT Champ”
var countVowels = function(myString) {
    console.log("Count the total number vowels using includes() for string → “Good Morning IT Champ”");
    //var myString = "Good Morning IT Champ";
    var vowelsLoweCase = "aeiou";
    var vowelUpperCase = "AEIOU";
    var vowelsCount=0;
    for (let index = 0; index < myString.length; index++) {
       var char =  myString.charAt(index);
       var isLowerAvailable =  vowelsLoweCase.includes(char);
       var isUpperAvailable =  vowelUpperCase.includes(char);
       if (isLowerAvailable || isUpperAvailable) {
            vowelsCount = vowelsCount + 1;
       }
    }
    console.log(`Total Vowels count : ${vowelsCount}`);
}
countVowels("Good Morning IT Champ");
console.log("============================");


function evenPositionedChars(myString){
    for (let index = 0; index < myString.length; index++) {
       // console.log(index%2==0);
       var chh = myString.charAt(index);
       if (index%2==0 && chh!=" ") {
          console.log(chh);
       }
       //var chh = myString.charAt(index);
        
    }
}
evenPositionedChars("Hard work always pays back");



var count = 10; // initialization
while (count>=0) { // condition
    console.log(count); 
    count--; // update 

}





