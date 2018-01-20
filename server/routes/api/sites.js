const router = require('express').Router();
const { Photos, Sites } = require('../../db/models');
const distance = require('../../utils');

router.get('/', (req, res, next) => {
  Sites.scope('populated').findAll()
  .then((sites) => {
    if(req.query) {
      const coords = req.query.location.split('!');
      const selfLat = +coords[0];
      const selfLon = +coords[1];
      return sites.filter((site) => {
        return (distance(+site.latitude, +site.longitude, selfLat, selfLon) < 3);
    });
    }else {
      return sites;
    }
  })
  .then((sites => res.json(sites)))
  .catch(next);
});

router.get('/:id', (req, res, next) => {
  Sites.scope('populated').findById(req.params.id)
  .then((site) => res.json(site))
  .catch(next);
});

module.exports = router;
