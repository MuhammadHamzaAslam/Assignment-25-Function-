function date1() {
    let now = new Date()
    document.write(`<h1> ${now} </h1>`)
}
function greet() {
    let name1 = prompt("Enter Your First Name")
    let name2 = prompt("Enter Your Last Name")
    document.write(`<h1> Welcome  ${name1} ${name2} </h1>`)
    
}

function sum() {
    let num = parseInt(prompt("Enter A First Number"))
    let num1 = parseInt(prompt("Enter A Second Number"))
    document.write(`<h1> The Answer is  ${num+num1} </h1>`)
    
}

function calculator() {
    let num = parseInt(prompt("Enter the first number"));
    let operation = prompt("Enter the operation (+, -, *, /)");
    let num1 = parseInt(prompt("Enter the second number"));

    let result;
    if (operation == "+") {
        result=num+num1
    }
    else if(operation == "-"){
        result = num - num1
    }
    else if(operation == "*"){
        result = num * num1
    }
    else if(operation == "/"){
        result = num / num1
    }
    else{
        
        document.write(`<h1>Invalid Operation</h1>`);
    }

    document.write(`<h1>The answer is: ${result}</h1>`);
}

function square(a) {
    let squaring = a*a
    document.write(`<h1>The Square is: ${squaring}</h1>`);
    
}

function factorial(a) {
    
    let emp = 1;
    for (let i = a; i > 0; i--) {
    emp *= i
    
    }
    document.write(`<h1> ${emp} </h1>`);
}

function counting(a,b) {
    for (let i = a; i < b; i++) {
        document.write(`<h1> ${i} </h1>`)
        
    }
    
}

function palindrome() {
    let name1 = prompt("Enter A Word")
    let name2 = name1.split().reverse().join()
    if (name1 == name2) {
        document.write(`<h1> ${name1} is a palindrome word </h1>`)
    } else {
        document.write(`<h1> ${name1} is a not palindrome word </h1>`)
        
    }
    
}

function capital() {
    let capitalize = prompt("Enter anything, I will convert its first letter into capital");
    let arr = capitalize.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    let result = arr.join(" ");
    document.write(`<h1>${result}</h1>`);
    // console.log(result);
}

function large(){
    var user = prompt("Enter a Word Or para I wil Tell u large letter")
    user = user.split(" ")
    var length = 0
    var find = ""
    for(var i = 0 ; i < user.length ; i++){
        if(user[i].length > length){
            length = user[i].length
            find = user[i]
            console.log(find);
        }
    }
}

function finding(a, b) {
    let data = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b) {
            data++;
        }
    }
    if (data > 0) {
        document.write(`<h1>The letter '${b}' was found ${data} times.</h1>`);
    } else {
        document.write(`<h1>No letter '${b}' found.</h1>`);
    }
}
