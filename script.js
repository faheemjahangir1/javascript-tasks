//calculator logic problem

let num1=5;
let num2=10;

let operator= "/";

if (operator === "+") {
    console.log(num1+num2);
    
}
else if(operator === "-"){
    console.log(num1-num2);
    
}
else if(operator === "*"){
    console.log(num1*num2);
}
else if(operator === "/"){
    if (num2 != 0){
        console.log(num1/num2);
        
    }
    else{
        console.log("num2 cannot be zero");
        
    }
}
else {
    console.log("invalid operators");
}

// Create a variable `marks` to store student marks (0–100).

let marks = 77;
let bonusMarks = 3;


// Add bonus marks using an assignment operator (+=).
marks += 5;

// Determine the grade using if-else:
// 90–100 → Grade A
// 70–89 → Grade B
// 50–69 → Grade C
// Below 50 → Grade F

let grade;

if (marks >= 90 && marks <= 100){
    grade = "A";
}
else if (marks >= 70 && marks <= 89){
    grade = "B";
}
else if (marks >= 50 && marks <= 69){
    grade = "C";
}
else {
    grade = "F";
    
}


// Determine Pass/Fail using a ternary operator:
// (marks >= 50 ? "Pass" : "Fail")
let result = ( marks >= 50 ? "Pass" : "Fail")


// Give remarks based on grade using a switch statement:
// A → "Excellent!"
// B → "Good"
// C → "Average"
// F → "Needs Improvement"

let remarks;
switch(grade){

    case "A":
    remarks= "excellent!";
    break;
    
    case "B":
    remarks= "good";
    break;

    case "C":
    remarks ="average";
    break;

    case "F":
    remarks ="needs improvement";
    break;

    default:
     remarks ="invalid";

}

// Print the results in the console:
// Marks, Grade, Result, Remark

console.log("marks:",marks);
console.log("grade:",grade);
console.log("result:",result);
console.log("remarks:",remarks);


