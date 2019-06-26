const request = require('supertest');
const app = require('../app.js').testingApp();

describe('app routes', () => {

  test('GET /health returns OK and status UP', async () => {
    return request(app)
      .get('/health')
      .expect('Content-Type', /json/)
      .expect(200, { status: "UP" });
  });
});
