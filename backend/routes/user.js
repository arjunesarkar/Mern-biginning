const router = require('express').Router();

let user = require('../models/user.model');

router.get('/', (req, res)=>{
    user.find()
    .then((user)=>res.json(user))
    .catch((error)=>res.status(400).json(error))
});

router.post('/add', (req, res)=>{
    console.log(req.body);

    const userName = req.body.UserName;
    
    const newUser = new user({userName})

    newUser.save()
    .then(()=>res.json('User add!'))
    .catch((error)=>res.status(400).json('Error' +error))
})
module.exports = router;