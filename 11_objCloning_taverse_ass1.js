console.log("1)---------------------------object bank_sbi---------------------------------");
let bank_sbi = {
    name: "State Bank Of India",
    branch: "Ambegon BK",
    IFSC: "SBI220864",
    MICR_Code: 1254890
}
console.table(bank_sbi);
console.log("2)-------------------------object bank_location-----------------------------------");
let bank_location = {
    street: "Satara Road",
    city: "Pune",
    pincode: 410046

}
console.table(bank_location);

console.log("2)-------------------------object cloning using object.assign()-----------------------------------");

let clone_sbi = Object.assign({}, bank_sbi);
console.table(clone_sbi);
let clone_bank_location = Object.assign({}, bank_location);
console.table(clone_bank_location);
console.log("3)-------------------------object cloning using spread operator-----------------------------------");
let clone_sbi_spredOpr = { ...bank_sbi };
console.table(clone_sbi_spredOpr);
let clone_locSpredOpr = { ...bank_location };
console.table(clone_locSpredOpr);
//console.log("4)-------------------------object rate of interest-----------------------------------");
let rate_of_interest = {
    home_lone_intrest: "7.5% p.a",
    personal_lone_interest: "12% p.a",
    due_interest: "8.55% p.a"
}
//console.log(rate_of_interest);
console.log("5)-------------------------object sbi_details-----------------------------------");

let sbi_details = { ...bank_sbi, ...bank_location, ...rate_of_interest };
console.table(sbi_details);
console.log("6)-------------------------object travers -----------------------------------");

for (const key in sbi_details) {
    if (Object.hasOwnProperty.call(sbi_details, key)) {
        const element = sbi_details[key];
        console.log(element);

    }
}







