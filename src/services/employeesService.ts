import axios from "axios";
import { EMPLOYEE_STATUSES } from "../EmployeesPage/Employee";
import { emulateServerResponse, generateInt } from "../utils";

export class EmployeesService {
  async fetchEmployees() {
    const response = await axios.get("/employees");
    const employees = response.data.results;
    return emulateServerResponse(employees);
  }
}

export const employeesService = new EmployeesService();
