// NUMBER 1
function max(a, b) {
    if (a > b)
        return a
    else 
        return b
}
console.log("-- NUMBER 1 --")
console.log(max(10, 5))
console.log(max(10, 15))

// NUMBER 2
function maxOfThree(a, b, c) {
    let largest = a
    if (b > largest)
        largest = b
    if (c > largest)
        largest = c
    return largest
}
console.log("-- NUMBER 2 --")
console.log(maxOfThree(10, 5, 11))
console.log(maxOfThree(10, 15, 11))

// NUMBER 3
function isVowel(a) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    return vowels.includes(a)
}
console.log("-- NUMBER 3 --")
console.log(isVowel('a'))
console.log(isVowel('z'))

// NUMBER 4
function sum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
console.log("-- NUMBER 4 --")
console.log(sum([1,2,3,4]))

function multiply(arr) {
    let product = 1
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i]
    }
    return product
}
console.log(multiply([1,2,3,4]))

// NUMBER 5
function reverse(str) {
    let reversed = ''
    for(let i = str.length; i > 0; i--) {
        reversed += str[i-1]
    }
    return reversed
}
console.log("-- NUMBER 5 --")
console.log(reverse('jag testar'))

// NUMBER 6
function findLongestWord(words) {
    let longest = ''
    words.forEach(element => {
        if(element.length > longest.length) longest = element
    });
    return longest.length
}
console.log("-- NUMBER 6 --")
console.log(findLongestWord(['jag', 'testar']))

// NUMBER 7
function filterLongWords(words, i) {
    let longWords = []
    words.forEach(element => {
        if(element.length > i) longWords.push(element)
    });
    return longWords
}
console.log("-- NUMBER 7 --")
console.log(filterLongWords(['jag', 'testar', 'jarod'], 4))


// NUMBER 8
function sum(arr = []) {
    return arr.reduce((a, b) => a + b, 0)
}
console.log(sum([1,2,3,4]))

function multiply(arr = []) {
    return arr.reduce((a, b) => a * b, 1)
}
console.log("-- NUMBER 8 --")
console.log(multiply([1,2,3,4]))

// NUMBER 9 
function findSecondBiggest(arr = []) {
    let biggest = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > biggest) biggest = arr[i]
    }
    arr1 = arr.filter(x => x != biggest)
    biggest = arr1[0]
    for (let i = 0; i < arr1.length; i++) {
        if(arr1[i] > biggest) biggest = arr1[i]
    }
    return biggest
}
console.log("-- NUMBER 9 --")
console.log(findSecondBiggest([1,2,3,4,5]))
console.log(findSecondBiggest([19,9,11,0,12]))

// NUMBER 10
function printFibo(n, a, b) {
    if (n == 0) return []
    if (n == 1) return [a]
    let fib = [a, b]
    for(let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2])
    }
    return fib
}
console.log("-- NUMBER 10 --")
console.log(printFibo(0, 0, 1))
console.log(printFibo(1, 0, 1))
console.log(printFibo(2, 0, 1))
console.log(printFibo(3, 0, 1))
console.log(printFibo(6, 0, 1))
console.log(printFibo(10, 0, 1))

// NUMBER 11
function logValues() {
    console.log("-- NUMBER 11 --")
    let form = document.getElementById("loginForm");
    console.log(form)

    const website = document.getElementById("website")
    console.log("Website: " + website.value)
    console.log("Email: " + document.getElementById("email").value)
    console.log("Password: " + document.getElementById("password").value)
}
function alertValues() {
    let message = ""
    const product = document.getElementById("productNumber").value
    if (product != "") message += "Product Number: " + product
    const quantity = document.getElementById("quantity").value
    if (quantity != "") message += " Quantity: " + quantity
    const name = document.getElementById("name").value
    if (name != "") message += " Name: " + name
    const supplier = document.getElementById("supplier").value
    if (supplier != "") message += " Supplier: " + supplier
    const price = document.getElementById("unitPrice").value
    if (price != "") message += " Unit Price: " + price
    const dateS = document.getElementById("dateSupplied").value
    if (dateS != "") message += " Date Supplied: " + dateS
    alert(message)
}

// NUMBER 12
function startTime() {
    var today = new Date()
    var d = today.toDateString()
    var t = today.toTimeString()
    document.getElementById('timeContainer').innerHTML = d + " " + t
    setTimeout(startTime, 500)
}