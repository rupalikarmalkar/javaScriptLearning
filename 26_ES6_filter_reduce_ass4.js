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
arrayEmployee.filter((person) => {
    if (person.emp_company === "Wipro") {
        console.log(`Employee from Wipro : ${person.emp_name}`);
    }
});
console.log(`___________________________Employee from HR & IT______________________________`);
arrayEmployee.filter((person) => {
    if (person.emp_dept === "IT" || person.emp_dept === "HR") {
        console.log(`Employee from HR & IT Dpartment : ${person.emp_name}`);
    }
});
console.log(`___________________________Employee ID > 50______________________________`);
arrayEmployee.filter((person) => {
    if (person.emp_id > 50) {
        console.log(`Employee from HR & IT Dpartment : ${person.emp_id}    ${person.emp_name}`);
    }
});

console.log(`_______________Employee Name Starts with A ,V & M______________________________`);

arrayEmployee.filter((person) => {
    if (person.emp_name.startsWith("A") || person.emp_name.startsWith("V") || person.emp_name.startsWith("M")) {
        console.log(person.emp_name);

    }

});
console.log("________________________________Average of salary________________________________________");
let sum = 0;

const sumOfSalary = arrayEmployee.forEach((person) => {
    return sum = sum + person.emp_salary;

});
let avg = sum / 7;
console.log("");

console.log(` Average of salary : ${avg}`);

const a_avg = [];
const avg_IT = arrayEmployee.filter((person) => {
    if (person.emp_dept == "IT") {
        a_avg.push(person.emp_salary);

    }

});
//console.log(a_avg);

console.log("_____________________________IT Department Average_____________________________________________________");
let total = 0;
const avg_it = a_avg.reduce((runningTotal, value) => {
    return total = runningTotal + value;

});
//console.log(total);
let sal_avg = total / 3;
console.log(`Average : ${sal_avg}`);


