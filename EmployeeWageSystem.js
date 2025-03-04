const PART_TIME = 1;
const FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empCheck = Math.floor(Math.random() * 3); // Generates 0, 1, or 2
let empHours = 0;

switch (empCheck) {
    case PART_TIME:
        empHours = PART_TIME_HOURS;
        console.log("Employee is working Part Time");
        break;
    case FULL_TIME:
        empHours = FULL_TIME_HOURS;
        console.log("Employee is working Full Time");
        break;
    default:
        empHours = 0;
        console.log("Employee is Absent");
}

let empWage = empHours * WAGE_PER_HOUR;
console.log(`Daily Employee Wage: $${empWage}`);
