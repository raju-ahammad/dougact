const router = require('express').Router()


const BlogController = require('../controllers/blogController')

router.get('/blog', BlogController.getAllBlog);
router.get('/blog/:id', BlogController.getBlog);
router.post('/blog',  BlogController.postBlog)

module.exports = router;