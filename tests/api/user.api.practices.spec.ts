import { test, expect } from "@playwright/test";

const authToken = {
  AUTHORIZATION: 'Bearer 38a35289ae1111d0e8558da9cce5eefb969252b7ff3c148fb9064ffb42e6b37b'
};

test('Get User Details API Test', async ({ request }) => {
  const response = await request.get('https://gorest.co.in/public/v2/users', {
    headers: authToken,
  });

  console.log(response);

  const responseBody = await response.json();
  expect(response.ok()).toBeTruthy();
  console.log(responseBody);
  console.log(response.status());
  console.log(response.statusText());
  
  expect(response.status()).toBe(200);

});


test('Create a New User API Test', async ({ request }) => {

    //User JS Object not the json with the post call this will automatically do the deseraialisation
    let UserData = {
        name: 'Shilpa2',
        email: 'shilpa2@gmail.com',
        gender: 'female',
        status: 'active'
    }
   
    //JS object  --> JSON (Seralisation)


   let response = await request.post('https://gorest.co.in/public/v2/users', {
    headers: authToken,
    data: UserData

  });

  let jsonBody = await  response.json();
  console.log(jsonBody);
  console.log(response.status());
  console.log(response.statusText());
  expect(response.status()).toBe(201);
  expect(response.statusText()).toBe('Created');


});