const express = require('express');

//const {getUsers} = require('../controllers/users.js')
const router = express.Router();

let users= [];

router.get('/', (req,res)=>{
    
    res.send(users)
})

router.post('/', (req,res)=>{
    const user = req.body;
    
    users.push(user)
    res.send(users)
})

router.get('/:id', (req,res)=>{
    const {id} = req.params;

    res.send(users.find(user=>user.id===id))
})

router.delete('/:id', (req,res)=>{
    const {id} = req.params;

    users = users.filter((user)=> user.id!==id)
})

module.exports = router;