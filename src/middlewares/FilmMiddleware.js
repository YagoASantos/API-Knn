const Middleware = require("./Middleware");
class FilmMiddleware extends Middleware {
    static verifyFilm(req, res, next) {
        const isValid = super.verifyBody({ name:'name', violence:'violence',
            action:'action', romance:'romance', comedy:'comedy' }, req.body);
        if(Object.keys(isValid).length === 0) {
            next();
        } else {
            return res.status(400).json(isValid);
        }
    }
}
module.exports = FilmMiddleware;