// // ASSESSMENT 1: INTRO TO JAVASCRIPT
// // Coding practical questions

// // --------------------------- Consider the following variable:

var mantra = "Be the dev"

// // 1a. Write the code that determines if there is a 'B' in mantra.

var findB = (str) => {
    if (str.includes("B")) {
        return "True"
    }
}

console.log("Problem set 1:")
console.log(findB(mantra))

// // 1b. Write the code that determines if there is an 'x' in mantra.

var findX = (str) => {
    if (str.includes("x")) {
        return "True"
    } else {
        return "False"
    }
}

console.log(findX(mantra))

// 1c. Write the code that determines if there is a 'v' in mantra.
var findV = (str) => {
    if (str.includes("v")) {
        return "True"
    } else {
        return "False"
    }
}

console.log(findV(mantra));

// // 1d. STRETCH: Write a function that can take two arguments - a string and a letter and returns a sentence telling the user if the letter exists within the string.

var charFinder = (string, char) => {
    if (string.includes(char)) {
        return `Your string: ${string} includes ${char}.` ;
    } else {
        return `Your string: ${string} does not include ${char}.` ;
    }
}

console.log(charFinder("Hello world! I am a string and I am proud", "z"))


// ------------------------------ Consider the following variables:

var myDog = "Snoopy"
var myCat = "Garfield"

// // 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"

var findLongBoi = (str, str2) => {
    if (str.length > str2.length) {
        return `${str}`
    } else {
        return `${str2}`
    }
}

console.log("Problem set 2:")
console.log(findLongBoi(myDog,myCat))



// 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]

var createArray = (input, input2) => {
    let newArray= []
    
    newArray.push(input, input2) 
        return newArray
}

// console.log(createArray("Chris", "Farley"));

// // 2c. STRETCH: Write a function that accepts two variables and returns a string in all lowercase letters. Expected output: "snoopy garfield"

var lowercaseMachine = (str3, str4) => {
    let newString = `${str3} ${str4}`
    return newString.toLowerCase()
} 

// console.log(lowercaseMachine("garFiELd", "GUS"))


// ------------------------------ Consider the following variable:

var myMessage = "Learning is fun!";

// 3a. Write the code that logs each letter of the message using a for loop.
//hint: "logs" in this case means "prints to the terminal console."  This is typically done with a console.log(x), where x is the string, function, etc that you wish to see in the terminal.

console.log("Problem set 3:");

for (let i = 0; i<myMessage.length; i++) {
    let msgLoop = Array.from(myMessage);
    console.log(msgLoop[i]);
}


// 3b. Write the code that logs each letter of the message using map.
 
var learnLog = (str) => {
      return Array.from(str).map(x => x);
};

console.log(learnLog(myMessage));



// CAN I MAKE THIS CODE (3c) MORE CONSICE?! GO THRU AGAIN****

// 3c. STRETCH: Write the code that logs each letter of the message using a while loop.
let i = 0;
var newArr = Array.from(myMessage);
while (i< newArr.length) {
    console.log(newArr[i]); 
    i++;
}



// 3d. SUPER STRETCH: Write the code that logs each letter of the message using forEach().

var newArr = Array.from(myMessage);
let index= 0;
var arrayLog = (arr) => {
    console.log(arr[index]);
};

newArr.forEach(arrayLog);



// ---------------------------- Consider the following variable:


console.log("Problem Set 4:");

var testString = "thisisateststring"; 


// 4a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"
const consonantFinder = (str) =>{
    let testArr = Array.from(str);
    let testArr2 = testArr.filter(value => {
        return value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u" 
    })
    return testArr2.join("");
}

console.log(consonantFinder(testString));

// 4b. STRETCH: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.

const consonantFinder2 = (str) =>{
    let testArr = Array.from(str);
    if (typeof str !== "string") {
        return "Error";
    }
    let testArr2 = testArr.filter(value => {
        return value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u" 
    })
    return testArr2.join("");
}

console.log(consonantFinder2(2));




// ------------------------------- Consider the following variable:

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

// // 5a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]
const catsOnly = (arr3) => {
    return arr3.filter(value => value.animal === "cat");
}

console.log(catsOnly(toonimals))

//5b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"
const noCats = (arr4) => {
    return arr4.filter(value => value.animal !== "cat").map(value => value.name).join(", ");
}

console.log(noCats(toonimals))


//5c. STRETCH: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"
