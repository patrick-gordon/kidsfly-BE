const express = require('express');
const bcrypt = require('bcryptjs');
const Protected = require('./restricted-middleware');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');


const router = express.Router();
router.use(bodyParser.urlencoded({extended: true}))

router.post('/login', (req, res) => {
    const user = req.body.user;
    console.log('traveler', traveler)
})