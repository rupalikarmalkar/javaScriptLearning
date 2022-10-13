var num2 = 50; 
var num3 = "50"; 
console.log(`******* == operator ************`);
var result = num2 == num3; // 50 == 50

console.log("num2==num3=====> ", result);

console.log("num2===num3=====> ", num2===num3);

var num1 = -5;
var result = num1 > 0 ? "Positive" : "Negative";
console.log(result);

var tcsEligibilityCheck = function (grad_score, hsc_score, ssc_score, candidate_name) {
    console.log(grad_score >= 70 );
        var result = grad_score >= 70 || hsc_score >= 80 || ssc_score > 90  // false || true
            ? `Congrates ${candidate_name} you are eligible for TCS interview`
            : "Unfortunately you are not eligible for interview";
        console.log(result);
    }
    tcsEligibilityCheck(80, 86, 90, "Mohit Sharma");
    tcsEligibilityCheck(69, 65, 95, "Anil Pende");
    