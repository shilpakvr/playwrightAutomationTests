import { test, expect } from '../../src/fixtures/apifixtures'

const TOKEN = process.env.API_Token;

let AUTH_HEADER = {
    Authorization: `Bearer ${TOKEN}`

};

let userId: number;

test.describe.serial('running e2e group of API Tests', () => {
    //GET Test:

    test('Get All Users', async({ apiHelper}) => {
        let response = await apiHelper.get(`public/v2/users`, AUTH_HEADER)
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
        // expect(response.body.length).toBeGreaterThan(0);
    });

    test('Post All Users', async ({ apiHelper }) => {
        const userData = {
            name: 'shilpa5',
            email: `pwshilpa_${Date.now()}@gmail.com`,
            gender: 'female',
            status: 'active'
        };

        const response = await apiHelper.post('public/v2/users', userData, AUTH_HEADER);
        expect(response.status).toBe(201);
        expect(response.statusText).toBe('Created');
        userId = response.body.id;
        // expect(response.body.length).toBeGreaterThan(0);
    });

    test('Put or Update the User', async ({ apiHelper }) => {
        const userData = {
            name: `shilpa${Date.now()}`,
            email: `pwshilpa_${Date.now()}@gmail.com`,
            gender: 'female',
            status: 'active'
        };

    const response = await apiHelper.put(`public/v2/users/${userId}`, userData, AUTH_HEADER);        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
        expect(response.body.name).toBe(userData.name);
        expect(response.body.email).toBe(userData.email);        
        //userId = response.body.id;
        // expect(response.body.length).toBeGreaterThan(0);
    });

    test('Delete user', async ({ apiHelper }) => {

        const response = await apiHelper.delete(`public/v2/users/${userId}`, AUTH_HEADER);
        expect(response.status).toBe(204);
        // expect(response.body.length).toBeGreaterThan(0);
    });
});