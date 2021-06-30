import { rest } from 'msw';
import employees from '../mocks/employees';

export const handlers = [
    rest.get('/employees', async (req, res, ctx) => {
        try {
            return res(
                ctx.delay(),
                ctx.status(200),
                ctx.json(employees)
            );
        } catch {
            return res(
                ctx.status(400)
            );
        }
        
    }),
    rest.get('/employees/:id', async (req, res, ctx) => {
        try {
            const { id } = req.params;
            const employeeIndex = employees.findIndex(emp => emp.id === id);
            return res(
                ctx.delay(),
                ctx.status(200),
                ctx.json(employees[employeeIndex])
            );
        } catch {
            return res(
                ctx.status(400)
            );
        }
        
    }),
    rest.post('/employees', async (req, res, ctx) => {
        try {
            const newEmployee = req.body as any;
            employees.push(newEmployee);
            return res(
                ctx.delay(),
                ctx.status(201),
                ctx.json(newEmployee)
            );
        } catch {
            return res(
                ctx.status(400)
            );
        }
    }),
    rest.patch('/employees/:id', async (req, res, ctx) => {
        try {
            const id = +req.params.id;
            const newEmployee = req.body as any;
            const employeeIndex = employees.findIndex(emp => emp.id === id);
            employees[employeeIndex] = { ...employees[employeeIndex], ...newEmployee };
            console.log(employees[employeeIndex]);
            return res(
                ctx.delay(),
                ctx.status(200),
                ctx.json(employees[employeeIndex])
            );
        } catch {
            return res(
                ctx.status(400)
            );
        }
    }),
    rest.put('/employees/:id', async (req, res, ctx) => {
        try {
            const id = +req.params.id;
            const newEmployee = req.body as any;
            const employeeIndex = employees.findIndex(emp => emp.id === id);
            employees[employeeIndex] = newEmployee;
            return res(
                ctx.delay(),
                ctx.status(201),
                ctx.json(employees[employeeIndex])
            );
        } catch {
            return res(
                ctx.status(400)
            );
        }
    }),
]
