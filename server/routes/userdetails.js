const router = require('express').Router();
const UserModel = require('../models/UserDetails');

router.get('/details', async (req, res) => {
    try{
        const details = await UserModel.find({});
        res.json(details);
    } catch(err) {
        res.send()
    }
});

router.post('/details', async (req, res) => {
    const newUserDetail = new UserModel({
      bio: req.body.bio,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phone,
      country: req.body.country,
      state: req.body.state,
      twitter: req.body.twitter,
      linkedin: req.body.linkedin,
      instagram: req.body.instagram,
      youtube: req.body.youtube,
      blog: req.body.blog,
      video: req.body.video
    });

    try{
        const newDetail = await newUserDetail.save();
        console.log(newDetail);
        res.status(200).json({message: 'User detail has been successfully saved'});
    } catch(err){
        res.status(500).json({message: 'Something went wrong'});
        console.error(error.message);
    }
});

// get post
module.exports = router;