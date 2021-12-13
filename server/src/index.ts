import Koa from 'koa';
import Router from '@koa/router';
import Cors from '@koa/cors';

// import { poseRouter } from './pose';
import db from './db';

const API_VERSION = "/api/v1";

const poseRouter = new Router({
  prefix: `${API_VERSION}/poses`
});

poseRouter.get(
  '/',
  async (ctx, next) => {
    const poseNames = await db.getPoseNames();
    console.log(`Get ${poseNames.length} poses.`);
    ctx.body = { names: poseNames.map(p => p.name) };
    next();
  }
)
poseRouter.get(
  '/:id',
  async (ctx, next) => {
    const id = ctx.params.id
    console.log(id);
    const poseDetails = await db.getPoseByName(id);
    ctx.body = { poseDetails };
    next();
  }
);

const app = new Koa();

app
  .use(Cors())
  .use(poseRouter.routes())
  .use(poseRouter.allowedMethods());

app.listen(3003, () => console.log('Pose server is listening at 3003...'));
