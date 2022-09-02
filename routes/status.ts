import {Router} from 'express';

const router = Router();

router.get('/', function(req, res) {
  res.send({healthy: true});
});

export default router;