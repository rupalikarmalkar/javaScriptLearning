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
console.log("_____________________________List of all Employee Name_______________________________");


const arrayEmployee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
arrayEmployee.forEach((person) => {
    console.log(`Employee Name : ${person.emp_name}`);

});
console.log("_____________________________List of all Employee ID_______________________________");


const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
arrayEmployee.forEach((person) => {
    console.log(` Employee ID : ${person.emp_id}`);

});


console.log("____________________________Employee of Wipro________________________________");
arrayEmployee.forEach((person) => {
    if (person.emp_company == "Wipro") {
        console.log(`Name:${person.emp_name} Company:${person.emp_company}`);

    }
});
console.log("____________________________salary >= 50000________________________________");
arrayEmployee.forEach((person) => {
    if (person.emp_salary >= 50000) {
        console.log(`Name: ${person.emp_name}    Salary : ${person.emp_salary}`);
    }
});
console.log("____________________________Sum of array element________________________________");
let sum = 0;
arrayEmployee.forEach((person) => {
    return sum = sum + person.emp_salary;
});
console.log(`The sum of salary is: ${sum}`);
console.log("____________________________Average of array element________________________________");
let average = sum / 7;
console.log(`Average of array is : ${average}`);

console.log("____________________________Employee from HR & IT dept________________________________");

arrayEmployee.forEach((person) => {
    if (person.emp_dept === "IT" || person.emp_dept === "HR" || person.emp_salary >= 75000) {
        console.log(` ID: ${person.emp_id}   Name: ${person.emp_name}   Department: ${person.emp_dept}  Salary : ${person.emp_salary} Company: ${person.emp_company}`);
    }
});

