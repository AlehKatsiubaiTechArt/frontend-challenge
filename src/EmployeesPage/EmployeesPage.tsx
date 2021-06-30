import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { employeesService } from '../services/employeesService';
import Employee from './Employee';

function EmployeesPage({ className }: { className?: string }) {
  const loadedEmployees = new Array(5)
    .fill({ isLoading: true })
    .map((i, index) => ({ ...i, id: index }));
  const [employees, setEmployees] = useState<any[]>(loadedEmployees);

  useEffect(() => {
    employeesService.fetchEmployees()
      .then(setEmployees);
  }, []);

  const handleStatusChange = (employee: any, status: string) => {
    employeesService.changeEmployeeStatus(employee.id, status)
      .then((newEmployee) => {
        const newEmployees = employees.map(e => e.id === newEmployee.id ? newEmployee : e);
        setEmployees(newEmployees);
      });
  };
  
  return (
    <div className={className}>
      {employees.map(employee => (
        <Employee
          key={employee.id}
          {...employee}
          onStatusChange={status => handleStatusChange(employee, status)}
        />
      ))}
    </div>
  )
}

export default styled(EmployeesPage)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
