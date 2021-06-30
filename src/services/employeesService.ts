import axios from "axios";

export class EmployeesService {
  async fetchEmployees() {
    const response = await axios.get("/employees");
    const employees = response.data;
    return employees;
  }

  async fetchEmployee(id: number | string) {
    const response = await axios.get(`/employees/${id}`);
    const employee = response.data;
    return employee;
  }

  async changeEmployeeStatus(id: number | string, status: string) {
    const response = await axios.patch(`/employees/${id}`, { status });
    const employee = response.data;
    return employee;
  }
}

export const employeesService = new EmployeesService();
