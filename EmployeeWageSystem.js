const IS_PRESENT = 1;
let empCheck = Math.floor(Math.random() * 2); // Generates 0 or 1

if (empCheck === IS_PRESENT) {
    console.log("Employee is Present");
} else {
    console.log("Employee is Absent");
}
