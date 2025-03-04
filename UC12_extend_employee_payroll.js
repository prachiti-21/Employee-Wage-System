class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = new Date(startDate); // Convert to Date object
    }

    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Gender: ${this.gender}, Salary: $${this.salary}, Start Date: ${this.startDate.toDateString()}`;
    }
}

// Creating Employee Payroll Data with gender and start date
let employee1 = new EmployeePayroll(101, "John Doe", 5000, "Male", "2023-06-15");
let employee2 = new EmployeePayroll(102, "Jane Smith", 6000, "Female", "2024-01-10");

// Display Employee Details
console.log(employee1.getDetails());
console.log(employee2.getDetails());
