const BaseError = require('./BaseError');
class NotFound extends BaseError {
    constructor(message = 'Página não encontrada.') {
        super(message, 404);
    }
}
module.exports = NotFound;