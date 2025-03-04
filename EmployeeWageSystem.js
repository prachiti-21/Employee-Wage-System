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
let dailyWages = [];
let dailyHours = [];

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
    
    dailyWages.push(dailyWage);
    dailyHours.push(empHours);
}

// a. Calculate total Wage using reduce method
let totalWage = dailyWages.reduce((total, wage) => total + wage, 0);
console.log(`Total Wage using reduce: $${totalWage}`);

// b. Show the Day along with Daily Wage using map
let dailyWageWithDay = dailyWages.map((wage, index) => `Day ${index + 1}: $${wage}`);
console.log("Day-wise Wages: ", dailyWageWithDay);

// c. Show Days when Full-time wage of $160 was earned using filter
let fullTimeDays = dailyWages
    .map((wage, index) => ({ day: index + 1, wage }))
    .filter(dayInfo => dayInfo.wage === FULL_TIME_HOURS * WAGE_PER_HOUR)
    .map(dayInfo => `Day ${dayInfo.day}`);

console.log("Days with Full-Time Wage: ", fullTimeDays);

// d. Find the first occurrence when Full-Time Wage was earned using find
let firstFullTimeDay = dailyWages.find(wage => wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log(`First Full-Time Wage Earned: $${firstFullTimeDay}`);

// e. Check if Every Element of Full-Time Wage is truly holding Full-Time Wage
let isEveryFullTime = dailyWages.every(wage => wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log(`Did employee work full-time every day? ${isEveryFullTime}`);

// f. Check if there is any Part-Time Wage using some
let hasPartTimeWage = dailyWages.some(wage => wage === PART_TIME_HOURS * WAGE_PER_HOUR);
console.log(`Is there any Part-Time Wage? ${hasPartTimeWage}`);

// g. Find the number of days the Employee Worked using filter
let daysWorked = dailyHours.filter(hours => hours > 0).length;
console.log(`Total Days Worked: ${daysWorked}`);
