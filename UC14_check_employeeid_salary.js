class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        this.setId(id);        // Validate ID
        this.setName(name);    // Validate Name
        this.setSalary(salary); // Validate Salary
        this.setGender(gender); // Validate Gender
        this.setStartDate(startDate); // Validate Start Date
    }

    setId(id) {
        try {
            if (typeof id !== "number" || id <= 0) {
                throw new Error("Invalid ID: ID must be a non-zero positive number.");
            }
            this.id = id;
        } catch (error) {
            console.error(error.message);
        }
    }

    setName(name) {
        let namePattern = /^[A-Z][a-zA-Z]{2,}$/; // Starts with uppercase, min 3 characters
        try {
            if (!namePattern.test(name)) {
                throw new Error("Invalid Name: Name must start with a capital letter and have at least 3 characters.");
            }
            this.name = name;
        } catch (error) {
            console.error(error.message);
        }
    }

    setSalary(salary) {
        try {
            if (typeof salary !== "number" || salary <= 0) {
                throw new Error("Invalid Salary: Salary must be a non-zero positive number.");
            }
            this.salary = salary;
        } catch (error) {
            console.error(error.message);
        }
    }

    setGender(gender) {
        let genderPattern = /^[MF]$/; // Only 'M' or 'F' allowed
        try {
            if (!genderPattern.test(gender)) {
                throw new Error("Invalid Gender: Gender must be 'M' or 'F'.");
            }
            this.gender = gender;
        } catch (error) {
            console.error(error.message);
        }
    }

    setStartDate(startDate) {
        try {
            let date = new Date(startDate);
            let today = new Date();

            if (isNaN(date.getTime())) {
                throw new Error("Invalid Date: Please enter a valid date.");
            }

            if (date > today) {
                throw new Error("Invalid Date: Start date cannot be a future date.");
            }

            this.startDate = date;
        } catch (error) {
            console.error(error.message);
        }
    }

    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Gender: ${this.gender}, Salary: $${this.salary}, Start Date: ${this.startDate ? this.startDate.toDateString() : "Invalid Date"}`;
    }
}

// Creating Employee Payroll Data
let employee1 = new EmployeePayroll(101, "John", 5000, "M", "2023-06-15");
let employee2 = new EmployeePayroll(-102, "jane", -6000, "X", "2024-12-10"); // Invalid ID, name, salary, gender, date
let employee3 = new EmployeePayroll(103, "Alice", 7000, "F", "2025-11-20"); // Invalid future date

// Display Employee Details
console.log(employee1.getDetails());
console.log(employee2.getDetails()); // Will log errors for all invalid values
console.log(employee3.getDetails()); // Will log an error for the future date
