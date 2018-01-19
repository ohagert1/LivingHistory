const router = require('express').Router();
const { Photos, Sites } = require('../../db/models');


router.get('/', (req, res, next) => {
  Sites.findAll({})
})

router.get('/:id', (req, res, next) => {
  Sites.findById(req.params.id)
})
