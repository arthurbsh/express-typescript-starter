import {Router} from 'express';

const router = Router();

router.get('/', function(req, res, next) {
  res.send({healthy: true});
});

export default router;