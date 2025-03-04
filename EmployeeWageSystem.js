const PART_TIME = 1;
const FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS_PER_MONTH = 20;

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

for (let day = 1; day <= WORKING_DAYS_PER_MONTH; day++) {
    let empCheck = Math.floor(Math.random() * 3); // Generates 0, 1, or 2
    let empHours = getWorkHours(empCheck);
    totalEmpHours += empHours;
}

let monthlyWage = totalEmpHours * WAGE_PER_HOUR;

console.log(`Total Hours Worked in a Month: ${totalEmpHours}`);
console.log(`Monthly Employee Wage: $${monthlyWage}`);
