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





