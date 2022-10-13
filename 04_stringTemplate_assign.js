
var str_fun_var = function () {
    var string_var = "    Hey you are doing good,keep it up    ";

    console.log(`The string is= ${string_var}`);
    var str_lenght = string_var.length;
    console.log("-------------------------------------------------------");

    console.log(`The lenght of given string is ${str_lenght} chatecrers.`);
    console.log("-------------------------------------------------------");

    console.log("Before trim the string is=", string_var);
    var srt_trim = string_var.trim();
    console.log("After trim the string is=", srt_trim);
    console.log("-------------------------------------------------------");

    console.log(`The lenght of given string is ${str_lenght} chatecrers.`);

    var trimed_var = srt_trim.length;

    console.log(`Trimed lenght of given string is ${trimed_var} charecters.`);
    var extra_space = console.log("Extra space count is=", str_lenght - trimed_var, "charectes.");
    console.log("-------------------------------------------------------");

    var first_char = srt_trim.charAt(0);
    var last_char = srt_trim.charAt(trimed_var - 1)
    console.log(`First charecter=${first_char} Last charecter=${last_char}`);

    console.log("-------------------------------------------------------");

    var index_of_good = string_var.indexOf("good");
    console.log(`The index of word "good" is ${index_of_good}.`);

    console.log("-------------------------------------------------------");

    var sub_str = string_var.substring(22);
    var slice_str = string_var.slice(22);
    console.log(`Output using substring is= ${sub_str}& using slice is= ${slice_str}`);
    console.log("-------------------------------------------------------");
    var end_with = srt_trim.endsWith("up");
    console.log(`The given string is ending with "up" is ${end_with}.`);

    console.log("-------------------------------------------------------");

    var start_str_with = srt_trim.startsWith("Hey");
    console.log(`The trimed string is start with "Hey" is ${start_str_with}. `);

    console.log("-------------------------------------------------------");
}
str_fun_var();