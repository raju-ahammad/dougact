const router = require('express').Router()

const imageUpload = require('../middleware/imageUpload')

const worksController = require('../controllers/workController')

router.get('/works', worksController.getWorks);
router.post('/work', imageUpload.single("picture") , worksController.postWorks)

module.exports = router;