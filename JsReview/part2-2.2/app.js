const Car = function() {
	this.make = "default"
	this.model = "default"
	this.color = "default"
	this.drive = function(speed) {
		console.log(`The ${this.color} ${this.make} ${this.model} is driving at ${speed} mph.`)
	}
	this.stop = function() {
		console.log(`The ${this.color} ${this.make} ${this.model} is stopping.`)
	}
	return this
}

const RedHondaAccord = new Car()
RedHondaAccord.color = "red"
RedHondaAccord.make = "Honda"
RedHondaAccord.model = "Accord"

RedHondaAccord.drive(300)
