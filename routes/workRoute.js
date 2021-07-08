const router = require('express').Router()


const worksController = require('../controllers/worksController')

router.get('/works', worksController.getWorks);
router.get('/works/:id', worksController.getSigleWorks);
router.post('/work',  worksController.postWorks)

module.exports = router;