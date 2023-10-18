const FilmParameterService = require('../services/FilmParameterService');
class FilmController {
    static createFilmParameter (req, res) {
        const {name, violence, action, romance, comedy} = req.body;
        return res.status(200).json(FilmParameterService.createFilmParameter(name, violence, action, romance, comedy));
    }
    static compareFilms (req, res) {
        const {name, violence, action, romance, comedy} = req.body;
        const result = FilmParameterService.compareFilms(name, violence, action, romance, comedy);
        return res.status(200).json(result);
    }
}
module.exports = FilmController;