import { test, expect } from '../../src/fixtures/apifixtures'

const TOKEN = process.env.API_Token;

let AUTH_HEADER = {
    Authorization: `Bearer ${TOKEN}`

};

let userId: number;