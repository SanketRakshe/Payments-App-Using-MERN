const express = require('express');
const {authMiddleware} = require('../middleware');
const {Account} = require("../db");
const router = express.Router();

//this is a test router
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Account API!' });
});

router.get("/balance", authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    });

    res.json({
        balance: account.balance
    })
});



module.exports = router;