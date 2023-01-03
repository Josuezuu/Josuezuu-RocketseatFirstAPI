const {Router} = require('express');

const notesRouter = require('./notes.routes');
const usersRouter = require('./users.routes');

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/notes', notesRouter);

module.exports = routes;