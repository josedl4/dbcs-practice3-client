/**
 * Clase equipo para gestionar el recurso
 */
export class Team {

    name: string;
    code: string;
    shortName: string;
    playersAPI: string;

    /**
     * Constructor de la clase equipo
     *
     * @param name 
     * @param code 
     * @param shortName 
     * @param playersAPI 
     */
    constructor (
        name: string,
        code: string,
        shortName: string,
        playersAPI: string
    ) {
            this.name = name;
            this.code = code;
            this.shortName = shortName;
            this.playersAPI = playersAPI;
    }

}

