const FilmParameter = require('../model/FilmParameter');
const FilmsList = require('./FilmsList');
let filmsList = new FilmsList().films;
let filmParameter;

class FilmParameterService {
    static createFilmParameter (name, violence, action, romance, comedy) {
        filmParameter = new FilmParameter(name, violence, action, romance, comedy);
        return {message: 'Filme salvo com sucesso.'}
    }

    static compareFilms () {
        if(!filmParameter) {
            return {message: 'Insira um filme antes de realizar a comparação!'}
        }
        filmsList.sort(compareFilms);
        return {
            firstFilm: filmsList[0].name,
            secondFilm: filmsList[1].name,
            thirdFilm: filmsList[2].name
        }
    }
}
function compareFilms(firstFilm, secondFilm) {
    return firstFilm.compareFilms(filmParameter) - secondFilm.compareFilms(filmParameter);
}
module.exports = FilmParameterService;