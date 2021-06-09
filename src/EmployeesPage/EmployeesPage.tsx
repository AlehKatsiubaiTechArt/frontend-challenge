import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { employeesService } from '../services/employeesService';
import Employee from './Employee';

function EmployeesPage({ className }: { className?: string }) {
  const [employees, setEmployees] = useState<any[]>(new Array(5).fill({ isLoading: true }).map((i, index) => ({ ...i, id: index })));

  useEffect(() => {
    employeesService.fetchEmployees()
      .then(setEmployees);
  }, []);

  const handleStatusChange = (employee: any, status: string) => {
    const newEmployees = employees.map(e => e === employee ? { ...employee, status } : e);
    setEmployees(newEmployees);
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
`;
