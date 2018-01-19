const router = require('express').Router();
const { Photos, Sites } = require('../../db/models');


router.get('/', (req, res, next) => {
  Sites.scope('populated').findAll()
  .then((sites => res.json(sites)))
  .catch(next);
});

router.get('/:id', (req, res, next) => {
  Sites.scope('populated').findById(req.params.id)
  .then((site) => res.json(site))
  .catch(next);
});
