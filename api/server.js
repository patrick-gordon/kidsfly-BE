const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');



// const authRouter = require('../auth/auth-router.js');
// const usersRouter = require('../users/users-router.js');
const travelersRouter = require('../endpoints/users/travelers/travelers-router')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

// server.use('/api/auth', authRouter);
server.use('/api/travelers', travelersRouter);
// server.use('/api/assistants', assistantRouter)
// server.use('/api/trips', tripsRouter);

server.get('/', (req, res) => {
  res.send("It's alive!");
});

module.exports = server;