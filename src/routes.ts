import express from 'express';

import GetAccessToken from './controllers/GetAccessToken';
import ValidationAccess from './controllers/ValidationAccess';

const routes = express.Router();

const getAccesToken = new GetAccessToken();
const validationAccess = new ValidationAccess();

routes.post('/token', getAccesToken.index);
routes.post('/validation', validationAccess.Access);

export default routes;