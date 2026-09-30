import { test as baseTest } from '@playwright/test';
import { APIHelper } from '../api/ApiHelper';

// define api types for API fixtures
type ApiFixtures = {
  apiHelper: APIHelper;
};

export let test = baseTest.extend<ApiFixtures>({
  apiHelper: async ({ request }, use) => {
    let apiHelper = new APIHelper(request, process.env.API_BASE_URL!);
    await use(apiHelper);
  }
});

export {expect} from '@playwright/test'