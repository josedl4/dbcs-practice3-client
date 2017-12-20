/**
 * Clase competición para gestionar el recurso
 */
export class Competition {

    id: number;
    caption: string;
    league: string;
    year: string;
    currentMatchday: number;
    numberOfMatchdays: number;
    numberOfTeams: number;
    numberOfGames: number;
    lastUpdated: string;

    /**
     * Constructor de la clase competición
     *
     * @param id 
     * @param caption 
     * @param league 
     * @param year 
     * @param currentMatchday 
     * @param numberOfMatchdays 
     * @param numberOfTeams 
     * @param numberOfGames 
     * @param lastUpdated 
     */
    constructor (id: number,
        caption: string,
        league: string,
        year: string,
        currentMatchday: number,
        numberOfMatchdays: number,
        numberOfTeams: number,
        numberOfGames: number,
        lastUpdated: string) {
            this.id = id;
            this.caption = caption;
            this.league = league;
            this.year = year;
            this.currentMatchday = currentMatchday;
            this.numberOfMatchdays = numberOfMatchdays;
            this.numberOfTeams = numberOfTeams;
            this.numberOfGames = numberOfGames;
            this.lastUpdated = lastUpdated;
    }

}
