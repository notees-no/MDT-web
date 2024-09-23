const EmployeeAPI = {
    employees: [
      { id: 1, name: "Ben Blocker", job: "Teacher", address: "Street: 2345 Oakwood Drive" },
      { id: 2, name: "Dave Defender", job: "Student", address: "Street: 1456 Maple Street" },
      { id: 3, name: "Sam Sweeper", job: "Teacher", address: "Street: 9876 Park Avenue" },
      { id: 4, name: "Matt Midfielder", job: "Student", address: "Street: 3456 Elm Street" },
      { id: 5, name: "William Winger", job: "Student", address: "Street: 1234 Main Street" },
      { id: 6, name: "Fillipe Forward", job: "Rector", address: "Street: 5678 Cedar Lane" },
    ],
    all: function () {
      return this.employees;
    },
    get: function (id) {
      const isEmployee = (p) => p.id === id;
      return this.employees.find(isEmployee);
    },
    delete: function (id) {
      const isNotDelEmployee = (p) => p.id !== id;
      this.employees = this.employees.filter(isNotDelEmployee);
      return true;
    },
    add: function (employee) {
      if (!employee.id)
        employee = {
          ...employee,
          id:
            this.employees.reduce((prev, current) => {
              return prev.id > current.id ? prev : current;
            }, 0).id + 1,
        };
      this.employees = [...this.employees, employee];
      return employee;
    },
    update: function (employee) {
      this.get();
      this.employees.shift(employee);
      return employee;
    },
  };
  export default EmployeeAPI;