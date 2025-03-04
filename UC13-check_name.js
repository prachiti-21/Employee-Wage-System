class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        this.id = id;
        this.setName(name); // Validate name before assigning
        this.salary = salary;
        this.gender = gender;
        this.startDate = new Date(startDate); // Convert to Date object
    }

    setName(name) {
        // Regex pattern: Starts with uppercase, followed by at least 2 letters
        let namePattern = /^[A-Z][a-zA-Z]{2,}$/;
        try {
            if (!namePattern.test(name)) {
                throw new Error("Invalid Name: Name must start with a capital letter and have at least 3 characters.");
            }
            this.name = name;
        } catch (error) {
            console.error(error.message);
        }
    }

    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Gender: ${this.gender}, Salary: $${this.salary}, Start Date: ${this.startDate.toDateString()}`;
    }
}

// Creating Employee Payroll Data
let employee1 = new EmployeePayroll(101, "John", 5000, "Male", "2023-06-15");
let employee2 = new EmployeePayroll(102, "jane", 6000, "Female", "2024-01-10"); // Invalid name
let employee3 = new EmployeePayroll(103, "A", 7000, "Male", "2022-11-20"); // Invalid name

// Display Employee Details
console.log(employee1.getDetails());
console.log(employee2.getDetails()); // Will have an undefined name due to validation failure
console.log(employee3.getDetails()); // Will have an undefined name due to validation failure
