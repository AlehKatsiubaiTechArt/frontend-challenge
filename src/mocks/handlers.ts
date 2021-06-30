import { rest } from 'msw';
import axios from 'axios';
import { EMPLOYEE_STATUSES } from '../EmployeesPage/Employee';
import { generateInt } from '../utils';

export const handlers = [
    rest.get('/employees', async (req, res, ctx) => {
        try {
            const response = await axios.get("https://randomuser.me/api/?results=10")
            const employees = response.data.results
              .map((employee: any, i: number) => ({
                ...employee,
                status: EMPLOYEE_STATUSES[generateInt(0, 4)],
                id: i
              }));
            return res(
                ctx.status(200),
                ctx.json({ results: employees })
            );
        } catch {
            return res(
                ctx.status(400)
            );
        }
        
    }),
]
