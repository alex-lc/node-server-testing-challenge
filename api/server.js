const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

/* import routers */
const postsRouter = require('../posts/router.js');

/* middleware */
server.use(express.json());
server.use(helmet());
server.use(cors());

/* routes */
server.use('/api/posts', postsRouter);

/* endpoints */

server.get('/', (req, res) => {
    res.status(200).json({ api: 'running' });
});

module.exports = server;