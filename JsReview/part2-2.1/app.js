const Car = {
	make: "default",
	model: "default",
	color: "default",
	drive: function(speed) {
		console.log(`The ${this.color} ${this.make} ${this.model} is driving at ${speed} mph.`)
	},
	stop: function() {
		console.log(`The ${this.color} ${this.make} ${this.model} is stopping.`)
	}
}

const RedHondaAccord = Object.create(Car)
RedHondaAccord.color = "red"
RedHondaAccord.make = "Honda"
RedHondaAccord.model = "Accord"

RedHondaAccord.drive(200)
