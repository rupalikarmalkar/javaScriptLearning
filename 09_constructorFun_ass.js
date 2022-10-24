class Vehicle {
    constructor(name,color,speed,model,number){
    this.name = name;
    this.model = model;
    this.color = color;
    this.speed = speed;
    this.number = number;
    }

}
let v1= new Vehicle("Car","Aura","Red","80 km/h","MH-4589");
console.table(v1);

let v2= new Vehicle("Baik","Spleender","Black","70 km/h","MH-3259");
console.table(v1);

let v3= new Vehicle("Truck","Tata truck","Red","20 km/h","MH-3504");
console.table(v1);

let v4= new Vehicle("Van","Omni","Blue","65 km/h","MH-4189");
console.table(v1);

let v5= new Vehicle("Bus","Sleeper Coach","Yellow","100 km/h","MH-7589");
console.table(v1);

class Collage{
    constructor(name,principal,fees,grade,city){
        this.name = name;
        this.principal = principal;
        this.fees = fees;
        this.grade = grade;
        this.city = city;

    }
    
}

let c1 = new Collage("Starwood College of Engineering","V.K.Joshi","80,000","A+","Mumbai");
console.table(c1);



let c2 = new Collage("Adarsh College ","D.G Kulkarni","50,000","A","Nanded");
console.table(c2);



let c3 = new Collage("DY Engineering College","V.K.Joshi","75,000","A+","Pune");
console.table(c3);


let c4 = new Collage("ZEEL Engineering College","V.K.Joshi","65,000","A","Nasik");
console.table(c4);

let c5 = new Collage("VJTI Engineering College","V.K.Joshi","80,000","A+","Pune");
console.table(c5);

function traverse_object(arg){
    for (const key in arg) {
        if (v1.hasOwnProperty.call(arg, key)) {
            const element = arg[key];
            console.log(`${key}, ${element}`);
            
        }
    }
    console.log("------------------");

}
traverse_object(v1);
traverse_object(c1);


