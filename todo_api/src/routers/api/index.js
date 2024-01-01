import {Router} from 'express';
import helloRouter from './hello.router';

const urlPatterns = new Map([['/hello', helloRouter]]);

// eslint-disable-next-line new-cap
const apiRouter = Router();
urlPatterns.forEach((router, path) => {
  apiRouter.use(path, router);
});

export default apiRouter;
