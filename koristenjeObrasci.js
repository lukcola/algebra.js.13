var brojanje = require("./obrasci");

console.log("Total steps=" + brojanje.getTotalSteps());
brojanje.walk();
console.log("Total steps=" + brojanje.getTotalSteps());
brojanje.walk();
console.log("Total steps=" + brojanje.getTotalSteps());
brojanje.walk();
console.log("Total steps=" + brojanje.getTotalSteps());
brojanje.run();

var total = brojanje.getTotalSteps();
console.log("Total steps= " + total);