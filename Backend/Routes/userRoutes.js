const express = require('express');
const router = express.Router()

router.get('/api/auth', (req,res)=>{
    res.send('User Authentication')
})


module.exports = router