console.log("1)>>>>>>>>>>>>>>>>>>>>>>>>>>");
const array_nums = [20, 3, 4, 56, 90, 400, 49];
const array_clone = array_nums;
array_clone.push(55);
array_clone.push(66);
console.log(`orignal array = ${array_nums}`);
console.log(`clone array updated with values 55,66  = ${array_clone}`);
console.log("2)>>>>>>>>>>>>>>>>>>>>>>>>>>");

const array_c = [...array_nums]
array_nums.push(10);
array_nums.push(15);
console.log(`Using ...operator`);
 console.log(`orignal array is updated with values 10,15 =${array_nums}`);
 console.log(`clone array = ${array_c}`);
console.log("3)>>>>>>>>>>>>>>>>>>>>>>>>>>");
const array_even = [2, 30, 14, 8];
const array_concat = [...array_even, ...array_nums];
console.log(`Concat array_even & array_nums = ${array_concat}`);
console.log("4)>>>>>>>>>>>>>>>>>>>>>>>>>>");
const employee_info = {

    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "40,0000INR",
        aug_month: "50,0000INR",
        jun_month: "65,0000INR"
    },
    address: {
        location: {
            colony: "OM Vrindavan Socity",
            street: "Kanch Pokali",
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
    mobile: ["+91 8600 3456 88", "1000- 4567 32", "+91- 9096 5678 77"]
}
console.log("5).........Information of Employee");
console.log(employee_info.address.location.colony, employee_info.address.location.street,employee_info.address.city,employee_info.address.state,
    employee_info.address.country);
    console.log("4-b)........Mobile  Numbers");

    console.log(employee_info.mobile);
    console.log("6)--------------------------------------------");

    let employee_dclone={...employee_info};
    console.log("b).........Updated  street property");
    employee_dclone.address.location.street=" Chinch Pokali";
    console.log(employee_dclone.address.location.street);
    console.log("a).........Updated  Mobiles  property");

    employee_dclone.mobile[0]="+91 744 743 0084";
    console.log(employee_dclone.mobile);
console.log("c)............After using ...operator orignaln  & cloned ");
    console.log(employee_dclone);
    console.log("-----------------------------------------------------------------------");
    console.log(employee_info);
console.log("d)...........Update was made in cloned nested object but this change is happened in both objects");
console.log("7)--------------------------------------");
 let employee_deepclone= JSON.parse( JSON.stringify(employee_info));
 console.log("a....Update july_month to 80K");
 employee_deepclone.salary.july_month="80K";
 console.log(employee_deepclone.salary.july_month);
 console.log("b....Update country to United Kingdom");
 employee_deepclone.address.country="United Kingdom";
 console.log(employee_deepclone.address.country);
console.log("c).....orignal & deep copy");
 console.log(employee_info);
 console.log("--------------------------------------------");
 console.log(employee_deepclone);

