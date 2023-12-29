const router = require('express').Router();

let excersice = require('../models/excersice.model');

router.get('/', (req, res)=>{
    excersice.find()
    .then((excersice)=>res.json(excersice))
    .catch((error)=>res.status(400).json(error))
});

router.post('/add', (req, res) => {
    const userName = req.body.username;
    const description = req.body.description;
    const derection = req.body.derection;

    const newUser = new excersice({ userName, description, derection });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(error => res.status(400).json(error));
});

router.get('/:id', (req, res)=>{
    excersice.findById(req.params.id)
    .then(excersice=>res.json(excersice))
    .catch(error=>res.status(400).json('error' +error))
});
router.delete('/:id', (req, res)=>{
    excersice.findByIdAndDelete(req.params.id)
    .then(excersice=>res.json(excersice))
    .catch(error=>res.status(400).json('error' +error))
})
router.post('/update/:id', (res, req)=>{
    excersice.findByIdAndUpdate(req.params.id)
    .then(excersice=>{
        excersice.username=req.body.username,
        excersice.description = req.body.description,
        excersice.derection = req.body.derection

        excersice.save()
        .then(()=>res.json('Excersise save!'))
        .catch(error=>res.status(400).json('error' +error))
    })
    .catch(error=>res.status(400).json('error' +error))
})

module.exports = router;