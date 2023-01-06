const {Router} = require('express');

const notesRouter = require('./notes.routes');
const usersRouter = require('./users.routes');
const tagsRouter = require('./tags.routes');

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/notes', notesRouter);
routes.use('/tags', tagsRouter);

module.exports = routes;