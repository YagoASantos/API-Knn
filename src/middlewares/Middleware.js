const NotFound = require("../errors/NotFound");
const BaseError = require("../errors/BaseError");
const undefinedFiels = 'Todos os campos devem ser preenchidos.';
const emptyFields = 'Os campos não podem estar vazios.';
class Middleware {
    static verifyBody(propertyNames, object) {
        const isNotValid = {};
        for (let property in propertyNames) {
            if(object[property] === undefined){
                isNotValid.message = undefinedFiels;
                return isNotValid;
            }
            if(object[property] === '') {
                isNotValid.message = emptyFields;
                return isNotValid;
            }
        }
        return isNotValid;
    }
    static errorHandler(error, req, res, next) {
        if(error instanceof NotFound) return error.sendResponse(res);
        return new BaseError().sendResponse(res);
    }
    static PageNotFoundHandler(req, res, next) {
        const notFound = new NotFound();
        next(notFound);
    }
}
module.exports = Middleware;