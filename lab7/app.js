(function () {
    console.log("-- QUESTION 1 --")
    x = 1
    var a = 5
    var b = 10
    var c = function (a, b, c) {
        console.log(x)
        console.log(a)
        var f = function (a, b, c) {
            b = a
            console.log(b)
            b = c
            var x = 5
        }
        f(a, b, c)
        console.log(b)
        var x = 10
    }
    c(8, 9, 10)
    console.log(b)
    console.log(x)
})();

(function () {
    console.log("-- QUESTION 2 --")
    var x = 9
    function myFunction() {
        return x * x
    }
    console.log(myFunction())
    x = 5
    console.log(myFunction())
}());

(function () {
    console.log("-- QUESTION 5 --")
    var x = 1
    function bar() {
        if (!foo) {
            var foo = 10
        }
        console.log(foo)
    }
    bar()
}()); // Wow!!!

(function () {
    // console.log("-- QUESTION 6 --")
    var add = (function () {
        var counter = 0
        return function () {
            return counter += 1
        }
    })();
}());

(function () {
    console.log("-- QUESTION 6 MODIFIED --")
    var count = (function () {
        var counter = 0
        return {
            get: function () { return counter },
            add: function () { counter += 1 },
            reset: function () { counter = 0 }
        }
    })();
    console.log(count.get())
    count.add()
    console.log(count.get())
    count.reset()
    console.log(count.get())
}());

(function () {
    console.log("-- QUESTION 8 --")
    var make_adder = function (inc) {
        var counter = 0
        return function () {
            return counter += inc
        }
    };
    var add5 = make_adder(5);
    console.log(add5());
    console.log(add5());
    console.log(add5());
    var add7 = make_adder(7);
    console.log(add7());
    console.log(add7());
    console.log(add7());
}());

(function () {
    console.log("-- QUESTION 10 --")
    var Employee = (function () {
        var name, age, salary
        function log() { // debug 
            return "Name: " + name + ", Age: " + age + ", Salary: " + salary
        }
        function setName(str) {
            name = str
        }
        function setAge(num) {
            age = num
        }
        function setSalary(salo) {
            salary = salo
        }
        return {
            getProps: log,
            setName: setName,
            setAge: setAge,
            setSalary: setSalary,
            increaseSalary: function (percentage) {
                let increment = salary * (percentage / 100)
                setSalary(salary + increment)
            },
            increaseAge: function (number) {
                setAge(age + number)
            }
        }
    })();
    Employee.setName("Paul"); Employee.setAge(18); Employee.setSalary(16000); 
    console.log(Employee.getProps())
    Employee.increaseAge(3); 
    console.log(Employee.getProps())
    Employee.increaseSalary(10); 
    console.log(Employee.getProps())

    console.log("-- QUESTION 11 --")
    // Add public field address and methods 
    Employee.address = "Default Address"
    Employee.getAdress = function() {
        return this.address
    }
    Employee.setAddress = function(add) {
        this.address = add
    }

    // debug stuff follows
    Employee.getAllProps = function() {
        return Employee.getProps() + ", Address: " + this.address
    }
    Employee.setAddress('1000 N 4th St');
    console.log(Employee.getAllProps());

    var e1 = Object.create(Employee)
    console.log(e1.address + " - exists in e1.__proto__ (which is a reference to Employee) and not directly in e1")

    e1.__proto__.phone = "Number" 
    e1.__proto__.getPhone = function() {
        return this.phone
    }
    e1.__proto__.setPhone = function(add) {
        this.phone = add
    }

    var e2 = Object.create(Employee)
    e2.setPhone("Numero")
    console.log(e2.phone + " - field created on e1.__proto__ can be seen by subsequent sub-classes of Employee")

    e2.weight = "50lbs"
    e2.getWeight = function() {
        return this.weight
    }
    e2.setWeight = function(wgt) {
        this.weight = wgt
    }
    console.log(e2.getWeight() + " - function only exists in e2, and not in e2.__proto__")

    var e3 = Object.create(Employee)
    // console.log(e3.getWeight()) // function does not in this case
}());
