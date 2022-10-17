function reversrString(str) {

    var str_len = str.length - 1;
    var reverseStr = "";

    for (let index = str_len; index >= 0; index--) {
//console.log(str.charAt(index))
        reverseStr = reverseStr + str.charAt(index)
    }
    console.log(reverseStr);

}
reversrString(`Hard work always pays back`);
reversrString(`Soon I will be Angular IT Champ`);