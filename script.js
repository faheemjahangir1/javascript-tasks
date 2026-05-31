// Print the results in the console:
// Marks, Grade, Result, Remark

// Create a variable marks to store student marks (0–100).

// Add bonus marks using an assignment operator (+=).

// Determine the grade using if-else:
// 90–100 → Grade A
// 70–89 → Grade B
// 50–69 → Grade C
// Below 50 → Grade F

// Determine Pass/Fail using a ternary operator:
// (marks >= 50 ? "Pass" : "Fail")

// Give remarks based on grade using a switch statement:
// A → "Excellent!"
// B → "Good"
// C → "Average"
// F → "Needs Improvement"



let marks = 77;
let bonusMarks = 3;

// Add bonus marks
marks += bonusMarks;

// Grade calculation
let grade;

if (marks >= 90 && marks <= 100) {
    grade = "A";
} 
else if (marks >= 70) {
    grade = "B";
} 
else if (marks >= 50) {
    grade = "C";
} 
else {
    grade = "F";
}

// Pass / Fail
let result = (marks >= 50 ? "Pass" : "Fail");

// Remarks
let remarks;

switch (grade) {
    case "A":
        remarks = "Excellent!";
        break;
    case "B":
        remarks = "Good";
        break;
    case "C":
        remarks = "Average";
        break;
    case "F":
        remarks = "Needs Improvement";
        break;
    default:
        remarks = "Invalid";
}


console.log("marks:", marks);
console.log("grade:", grade);
console.log("result:", result);
console.log("remarks:", remarks);
