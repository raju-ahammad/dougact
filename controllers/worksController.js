const Works = require("../models/worksModel");

const worksController = {
    getWorks: async (req, res) => {
        try {
            const worksPost = await Works.find().sort({ createdAt: 1})
            res.json(worksPost)
        } 
        catch (err) {
         console.log(err);
          return res.status(500).json({msg: err.message}) 
          }
    },
    postWorks: async (req, res) => {
        try {
            const {title, image, video, description} = req.body
            const works = new Works({
                title, image, video, description
            })
            await works.save();
            console.log(works);
            return res.status(200).json({works, msg: "works succesfully save" });

        }  
        catch (err) {
            console.log(err);
            return res.status(500).json({ err: "some error occured" });
        }
    },
    getSigleWorks: async (req, res) => {
        try {
            const id = req.params.id;
          
            const work = await Works.findById(id) 
            
            res.json(work)
        } catch (err) {
            return res.status(500).json({msg: err.message}) 
        }
    },

}

module.exports = worksController;
