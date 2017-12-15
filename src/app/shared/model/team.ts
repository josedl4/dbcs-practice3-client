export class Team {

    name: string;
    code: string;
    shortName: string;
    playersAPI: string;

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

