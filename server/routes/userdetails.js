const router = require('express').Router();
const UserModel = require('../models/UserDetails');

router.post('/getdetails', async (req, res) => {
    try{
        const data = await UserModel.find(
          {firebaseEmail: req.body.firebaseEmail},
          {useFindAndModify: false}
        );
        console.log(data);
        res.status(200).json(data);
    } catch (err) {
        console.log('error occured');
        res.status(500).json({message: err.message});
    }
})

router.post('/updatedetails', async (req, res) => {
    try{
        const updatedData = await UserModel.findOneAndUpdate(
          {firebaseEmail: req.body.firebaseEmail},
          {
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
            video: req.body.video,
          },
          {new: true}
        );
        console.log(updatedData);
        res
          .status(200)
          .json({message: "User detail has been successfully updated"});
    } catch(err) {
        res.status(500).json({message: "Something went wrong"});
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
      video: req.body.video,
      firebaseEmail: req.body.firebaseEmail
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