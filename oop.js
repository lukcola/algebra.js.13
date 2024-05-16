function Dog(name) {
    this.dogName = name || "Rex";
    this.bojaPsa = "Crna";
}

var dog = new Dog;
console.log("Ime psa default name = " + dog.dogName);

var dog1 = new Dog("Floki");
console.log("Ime psa = " + dog1.dogName);

Dog.prototype.imePsa = function(){
    return this.dogName;
}

Dog.prototype.bark = function(){
    return "Wuf, Wuf!";
}

console.log("Ime psa preko metode = " + dog.imePsa());
console.log("Ime psa preko metode = " + dog1.imePsa());
console.log("Glasanje psa = " + dog1.bark());