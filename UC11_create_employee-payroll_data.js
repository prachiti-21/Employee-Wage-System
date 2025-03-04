class EmployeePayroll {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}`;
    }
}

// Creating Employee Payroll Data
let employee1 = new EmployeePayroll(101, "John Doe", 5000);
let employee2 = new EmployeePayroll(102, "Jane Smith", 6000);

// Display Employee Details
console.log(employee1.getDetails());
console.log(employee2.getDetails());
