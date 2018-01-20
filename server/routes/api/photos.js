const router = require('express').Router();
const { Photos, Sites } = require('../../db/models');


router.get('/', (req, res, next) => {
  Photos.scope('populated').findAll()
  .then((photos => res.json(photos)))
  .catch(next);
});

router.get('/:id', (req, res, next) => {
  Photos.scope('populated').findById(req.params.id)
  .then((photo) => res.json(photo))
  .catch(next);
});

module.exports = router;
