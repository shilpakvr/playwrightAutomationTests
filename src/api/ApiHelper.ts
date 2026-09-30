
import { APIRequestContext } from "playwright/test";

export class APIHelper {
    private readonly request: APIRequestContext;
    private readonly baseURL: string;

    constructor(request: APIRequestContext, baseURL: string) {
        this.request = request;
        this.baseURL = baseURL;
    }


    // create the methods:
    //GET All the users list
    async get(endpoint: string, headers?: Record<string, string>) {
       let response = await this.request.get(`${this.baseURL}${endpoint}`, {
            headers: headers

        });
        console.log(await response.json(), response.status(), response.statusText());

        //const body = await response.json();

        return{
            status: response.status(),
            statusText: response.statusText(),
            body: await response.json()
        }
    }

   //POST  Create a user
    async post(endpoint: string, data: object,  headers?: Record<string, string>) {
       let response = await this.request.post(`${this.baseURL}${endpoint}`, {
            headers: headers,
            data: data

        })
        console.log(await response.json(), response.status(), response.statusText());

        return{
            status: response.status(),
            statusText: response.statusText(),
            body: await response.json()
        }
    }
 
   //PUT/Update the existing user

       async put(endpoint: string,data: object,  headers?: Record<string, string>) {
       let response = await this.request.put(`${this.baseURL}${endpoint}`, {
            headers: headers,
            data: data

        })
        console.log(await response.json(), response.status(), response.statusText());

        return{
            status: response.status(),
            statusText: response.statusText(),
            body: await response.json()
        }
    }

    //Delete the uesr

           async delete(endpoint: string, headers?: Record<string, string>) {
       let response = await this.request.delete(`${this.baseURL}${endpoint}`, {
            headers: headers

        })

        return{
            status: response.status(),
        }
    }
}