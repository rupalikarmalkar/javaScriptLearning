class Bank {
    constructor(bank_name, location, account_no, ifsc, intrest_rate) {
        this.bank_name = bank_name;
        this.location = location;
        this.account_no = account_no;
        this.ifsc = ifsc;
        this.intrest_rate = intrest_rate;
    }
}
let axis_bank = new Bank("Axis Bank", "Pune", "0014587632", "AXIS001245", "7.5% p.a");
let sbi_bank = new Bank("SBI Bank", "Pune", "0014587632", "SBI0012025", "8.5% p.a");
let icici_bank = new Bank("ICICI Bank", "Pune", "0014587632", "ICICI0441477", "9% p.a");
let kotak_bank = new Bank("KOTAK Bank", "Pune", "0014587632", "KOTAK001288", "9.5% p.a");
let hdfc_bank = new Bank("HDFC Bank", "Pune", "0014587632", "HDFC001245", "6.5% p.a");
let panjab_bank = new Bank("PANJAB Bank", "Pune", "0014587632", "AXIS001245", "7.6% p.a");

let array = [axis_bank, sbi_bank, icici_bank, kotak_bank, hdfc_bank, panjab_bank];
//console.table(array);
console.log("-------------------------Bank name and location---------------------------------------------");

for (let index = 0; index < array.length; index++) {
    const element = array[index];
     console.log(`${element.bank_name}, ${element.location}`);

}
console.log("---------------------------kotak bank-------------------------------------------");
for (const Bank of array) {
    if (Bank == kotak_bank) {

        console.table(Bank);

    }


}
