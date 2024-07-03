const request = require('supertest');
const portfinder = require('portfinder');
const { promisify } = require('util');
const app = require('../server');

let server;
let port;

beforeAll(async () => {
  port = await portfinder.getPortPromise({ port: 3000, stopPort: 3100 });
  server = app.listen(port);
}, 15000);

afterAll(async () => {
  if (server) {
    await promisify(server.close.bind(server))();
  }
}, 10000);

describe('GET /api/videos', () => {
  test('deve retornar uma lista de vídeos do YouTube', async () => {
    const response = await request(app).get(`/api/videos?q=test`).set('Host', `localhost:${port}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('items');
    response.body.items.forEach((item) => {
      expect(item).toHaveProperty('id.videoId');
      expect(item).toHaveProperty('snippet.title');
      expect(item).toHaveProperty('snippet.thumbnails.default.url');
    });
  });
});
