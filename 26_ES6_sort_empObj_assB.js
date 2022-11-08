class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }

}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log("_______________________ Ascending order of Id____________________________");
arrayEmployee.sort((a,b)=>{
    return a.emp_id > b.emp_id ? 1 :-1;

});
arrayEmployee.forEach((element)=>{
   console.log(`Id: ${element.emp_id} Name: ${element.emp_name}  Department: ${element.emp_dept}`);
});
console.log("________________________ Ascending order of Department _________________________________");
 
arrayEmployee.sort(function(a,b){
    if (a.emp_dept > b.emp_dept) {
       return 1
    }
    if (b.emp_dept > a.emp_dept) {
       return -1
    }

});
//console.log(arrayEmployee);

arrayEmployee.forEach((element)=>{
    console.log(`Id: ${element.emp_id} Department: ${element.emp_dept}  Company:${element.emp_company}`);
});
console.log("__________________________________Descending order of Salary_________________________________________");

arrayEmployee.sort(function(a,b){
    if (a.emp_salary > b.emp_salary) {
       return -1
    }
    if (b.emp_salary > a.emp_salary) {
       return 1
    }

});
//console.log(arrayEmployee);

arrayEmployee.forEach((element)=>{
    console.log(`Nmae: ${element.emp_name} Salary: ${element.emp_salary} Company: ${element.emp_company}`);
});
console.log("___________________________Ascending order of Company________________________________________________");
arrayEmployee.sort(function(a,b){
    if (a.emp_company > b.emp_company) {
       return -1
    }
    if (b.emp_company > a.emp_company) {
       return 1
    }

});
//console.log(arrayEmployee);

arrayEmployee.forEach((element)=>{
    console.log(`Id: ${element.emp_id} Name:${element.emp_name} Salary:${element.emp_salary} Department:${element.emp_dept}`);
});







