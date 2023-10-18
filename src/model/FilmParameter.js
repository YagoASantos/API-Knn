class FilmParameter {
    constructor(name, violence, action, romance, comedy) {
        this._violence = violence;
        this._name = name;
        this._action = action;
        this._romance = romance;
        this._comedy = comedy;
    }

    get name() {
        return this._name;
    }

    get violence() {
        return this._violence;
    }

    get action() {
        return this._action;
    }

    get romance() {
        return this._romance;
    }

    get comedy() {
        return this._comedy;
    }

    compareFilms (film) {
        return Math.hypot((this.violence - film.violence), (this.action - film.action),
            (this.romance - film.romance), (this.comedy - film.comedy)).toFixed(2);
    }
}
module.exports = FilmParameter;