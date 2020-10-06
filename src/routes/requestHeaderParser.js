const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    const output_format = {
        ipaddress: req.ip,
        language: req.get('accept-language'),
        software: req.get('user-agent')
    };
    res.json(output_format);
})

module.exports = router;