var Person = require("./lib/Person");

var ben = new Person("Ben Franklin");
var george = new Person("Geroger");

george.on('speak', function(said) {

	console.log(`${this.name} -> ${said}`);

});

ben.on('speak', function(said) {

	console.log(`${this.name}: ${said}`);

});


ben.emit('speak', "You may delay, but time will not.");
george.emit('speak', "it is better to be alone then in bad company");