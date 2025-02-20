import { request } from '@playwright/test';

class ApiClient {
  constructor(baseURL = process.env.BASE_URL) {
    this.baseURL = baseURL;
    this.requestContext = null;
  }

  async init() {
    this.requestContext = await request.newContext({
      baseURL: this.baseURL,
      extraHTTPHeaders: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    });
  }

  async post(endpoint, data) {
    if (!this.requestContext) {
      throw new Error(
        'Request context is not initialized. Call init() before making requests.'
      );
    }
    const response = await this.requestContext.post(endpoint, {
      data,
    });
    return response;
  }

  async get(endpoint) {
    if (!this.requestContext) {
      throw new Error(
        'Request context is not initialized. Call init() before making requests.'
      );
    }
    const response = await this.requestContext.get(endpoint);
    return response;
  }

  async dispose() {
    if (this.requestContext) {
      await this.requestContext.dispose();
    }
  }
}

export default ApiClient;
