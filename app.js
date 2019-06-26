const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const logger = require('koa-logger');

router.get('/hi', (ctx, next) => {
  ctx.body = 'Hello World!';
});

router.get('/health', (ctx, next) => {
  ctx.body = { status: "UP" };
});

module.exports = {
  app: () => {
    app.use(logger());
    app.use(router.routes());
    return app;
  },
  testingApp: () => {
    app.use(router.routes())
    return app.callback();
  }
}
