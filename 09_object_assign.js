let teacher={
    name:"Jyoti",
    address:"Near School",
    city:"pune",
    age:40,
    mobileNo:454855777,
    subject:"Computer",
    degree:{
        graduation:"BSc",
        postGraduation:"MSc",
        phd:"Adv Computing"
},
        certificate:{
            certification_1:" Haker Rank Participation",
            certification_2:"IFE course",
            certification_3:"Adv programing"

        },
        value:function(){
          let teacher_details  = console.log(`${this.graduation}, ${this.postGraduation},${this.phd},`);
          return teacher_details;

        }
}
console.table(teacher);

 teacher.profession="Teacher";
// console.table(teacher);

 teacher.name="Jyoti Joshi";

// console.table(teacher.name);
console.log(`After deleting certificate_1`);
 delete teacher.certificate.certification_1;
 console.table(teacher);
console.log(` After Addingnew certificate`);
 teacher.certificate.newcertificate = " Spark ";
 console.table(teacher);


 let allCertificates= teacher.certificate;
 console.table(allCertificates);

