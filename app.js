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
