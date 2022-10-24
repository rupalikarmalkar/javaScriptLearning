class Vehicle{
    constructor(name,speed,model,color,number){
        this.name = name;
        this.speed = speed;
        this.model = model;
        this.color = color;
        this.number = number;

    }

}
let v1 = new Vehicle("Car","80 km/h","Aura","Gray","MH-5524");
console.table(v1);
let v2 = new Vehicle("Baik","80 km/h","Aura","Gray","MH-5524");
console.table(v2);

let v3 = new Vehicle("Truck","12 km/h","Tata truck","Red","MH-8724");
console.table(v3);

let v4 = new Vehicle("Bus","60 km/h","Sleeper","Yellow","MH-5890");
console.table(v4);

let v5 = new Vehicle("Van","30 km/h","Omni","Blue","MH-5475");
console.table(v5);


