const FilmParameter = require('../model/FilmParameter');
class FilmsList {
        films = [];
    constructor() {
            this.films.push(new FilmParameter("As Patricinhas de Beverly Hills", 0.0, 0.3, 0.3,
                0.8));
            this.films.push(new FilmParameter("De repente 30", 0.0, 0.2, 0.1, 0.7));
            this.films.push(new FilmParameter("Ela é demais pra mim", 0.0, 0.1, 0.4,
                0.6));
            this.films.push(new FilmParameter("Simplesmente Acontece", 0.0, 0.2, 0.8,
                0.3));
            this.films.push(new FilmParameter("E se Fosse Verdade", 0.1, 0.2, 0.8,
                0.4));
            this.films.push(new FilmParameter("Wall-E", 0.0, 0.5, 0.5, 0.5));
            this.films.push(new FilmParameter("Divergente:Insurgente", 0.3, 0.8, 0.4,
                0.1));
            this.films.push(new FilmParameter("Guardiões da Galáxia", 0.2, 0.5, 0.2,
                0.2));
            this.films.push(new FilmParameter("Capitão América 2: O Soldado Invernal", 0.2, 0.8,
                0.3, 0.1));
            this.films.push(new FilmParameter("Assassinos por natureza", 0.9, 0.8, 0.3,
                0.1));
            this.films.push(new FilmParameter("Rambo IV", 1.0, 0.9, 0.1, 0.3));
            this.films.push(new FilmParameter("Scarface", 1.0, 1.0, 0.2, 0));
    }
    get films() {
            return this.films;
    }
}
module.exports = FilmsList;