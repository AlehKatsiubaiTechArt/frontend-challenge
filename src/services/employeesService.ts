import axios from "axios";
import { EMPLOYEE_STATUSES } from "../EmployeesPage/Employee";
import { emulateServerResponse, generateInt } from "../utils";

export class EmployeesService {
  async fetchEmployees() {
    const response = await axios.get("https://randomuser.me/api/?results=10");
    const employees = response.data.results
      .map((employee: any, i: number) => ({
        ...employee,
        status: EMPLOYEE_STATUSES[generateInt(0, 4)],
        id: i
      }));
    return emulateServerResponse(employees);
  }
}

export const employeesService = new EmployeesService();
