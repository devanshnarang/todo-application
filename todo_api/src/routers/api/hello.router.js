import {Router} from 'express';
import {helloController} from '../../controllers';

// eslint-disable-next-line new-cap
const helloRouter = Router();
helloRouter.route('/world').get(helloController.world);
helloRouter.route('/:name').get(helloController.name);

export default helloRouter;
