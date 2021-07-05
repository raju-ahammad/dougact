const Works = require("../models/workModel");

const worksController = {
    getWorks: async (req, res) => {
        try {
            const worksPost = await Works.find().sort({ createdAt: 'desc'})
            res.json(worksPost)
        } catch (err) {
          console.error(err);
          return res.status(500).json({msg: err.message}) 
          }
    },
    postWorks: async (req, res) => {
        try {
            if (req.file && req.file.path) {
            const works = new Works({
                ...req.body,
                image: req.file.path
            });
            await works.save();
            console.log(works);
            return res.status(200).json({ msg: "works succesfully save" });

            } else {
                console.log(req.file);
                return res.status(422).json({ error: "invalid post request" });
            }
        } 
        catch (error) {
            console.error(error);
            return res.status(500).json({ error: "some error occured" });
        }
    }

}

module.exports = worksController;
