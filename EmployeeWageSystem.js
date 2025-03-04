const PART_TIME = 1;
const FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

function getWorkHours(empCheck) {
    switch (empCheck) {
        case PART_TIME:
            return PART_TIME_HOURS;
        case FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

let totalEmpHours = 0;
let totalWorkingDays = 0;
let employeeRecords = []; // Array to store objects with Day, Hours, and Wage

while (totalEmpHours < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 3); // Generates 0, 1, or 2
    let empHours = getWorkHours(empCheck);

    // Ensure total hours do not exceed max limit
    if (totalEmpHours + empHours > MAX_WORKING_HOURS) {
        empHours = MAX_WORKING_HOURS - totalEmpHours;
    }

    totalEmpHours += empHours;
    let dailyWage = empHours * WAGE_PER_HOUR;

    // Store data in an object and push to array
    employeeRecords.push({
        day: totalWorkingDays,
        hoursWorked: empHours,
        wageEarned: dailyWage
    });
}

// Display employee records
console.log("Employee Records: ", employeeRecords);
