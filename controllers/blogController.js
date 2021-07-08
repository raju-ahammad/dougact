const Blogs = require("../models/blogModels");

const BlogController = {
    getAllBlog: async (req, res) => {
        try {
            const blog = await Blogs.find().sort({ createdAt: 1})
            return res.status(200).json(blog)
        } 
        catch (err) {
         console.log(err);
          return res.status(500).json({msg: err.message}) 
          }
    },
    postBlog: async (req, res) => {
        try {
            const {title, image, description} = req.body
            const blog = new Blogs({
                title, image, description
            })
            await blog.save();
            console.log(blog);
            return res.status(200).json({blog, msg: "Blog succesfully save" });

        }  
        catch (err) {
            console.log(err);
            return res.status(500).json({ err: "some error occured" });
        }
    },
    getBlog: async (req, res) => {
        try {
            const id = req.params.id;
          
            const blog = await Blogs.findById(id) 
            
            res.json(blog)
        } catch (err) {
            return res.status(500).json({msg: err.message}) 
        }
    },

}

module.exports = BlogController;
