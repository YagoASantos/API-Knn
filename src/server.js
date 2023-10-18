const express = require('express');
const FilmController = require('./controllers/FilmController');
const FilmMiddleware = require("./middlewares/FilmMiddleware");
const Middleware = require("./middlewares/Middleware");

const app = express();
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
app.use(express.json());
app.post('/films', FilmMiddleware.verifyFilm, FilmController.createFilmParameter);
app.get('/films', FilmController.compareFilms);
app.use(Middleware.PageNotFoundHandler);
app.use(Middleware.errorHandler);