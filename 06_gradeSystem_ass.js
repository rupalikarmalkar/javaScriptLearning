function gradeSystem(score) {
    
      if (score >=0 && score <35 && score != +""  && score !==null){
            console.log("You are Failed")
  }
  
  else if(score == 35){
        console.log("You are Passed")
  }
  
  else if(score >=35  && score < 60){
        console.log("You are passed and Grade C")
  }
  
  else if(score >= 60 && score < 75){
        console.log("You are passed and Grade B")
  }
  
  else if(score >= 75 && score < 90 ){
        console.log("You are passed and Grade A")
  }
    
  else if(score >= 90 && score <=100 ){
    console.log("You are passed and Grade A+")

   }
   else if(score <0 || score == " ")
   {
    console.log("invalid input")
   }
   else if(score <0 || score>=100 || score ==" " || score == null || score == undefined || typeof score=='string')
   {
    console.log("invalid input")
   }


    }

console.log("Score is 66")
gradeSystem(66);
console.log("======================== ")
console.log("Score is 13")
gradeSystem(13);
console.log("======================== ")
console.log(`score is " "`);
gradeSystem("");
console.log("======================== ")
console.log("Score is 98");
gradeSystem(98);
console.log("======================== ")
console.log(`Score is "Fifty Five"`)
gradeSystem("Fourty Five");
console.log("======================== ")
console.log("Score is 35");
gradeSystem(35)
console.log("=========================")
// gradeSystem(35);
console.log("Score is 75");
 gradeSystem(75);
 console.log("======================")
 console.log("Score is null");
 gradeSystem(null);
 console.log("===================")
 console.log("Score is undefined")
gradeSystem(undefined);
console.log("======================")
console.log("Score is -20");
 gradeSystem(-20);
 console.log("=====================");
 console.log("Score is 55");
 gradeSystem(55);
 console.log("====================")
 console.log("Score is 52");
gradeSystem(52);
console.log("=====================");

console.log("Score is 88")
gradeSystem(88);