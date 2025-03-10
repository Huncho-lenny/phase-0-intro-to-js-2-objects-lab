const employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  console.log("Original Employee:", employee);
  
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Oak St");
  console.log("Updated Employee (Non-Destructive):", updatedEmployee);
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "789 Pine St");
  console.log("Updated Employee (Destructive):", employee);
  
  const employeeWithoutAddress = deleteFromEmployeeByKey(employee, "streetAddress");
  console.log("Employee Without Address (Non-Destructive):", employeeWithoutAddress);
  
  destructivelyDeleteFromEmployeeByKey(employee, "name");
  console.log("Employee After Deletion (Destructive):", employee);
