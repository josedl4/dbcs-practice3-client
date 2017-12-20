/**
 * Clase jugador para gestionar el recurso
 */
export class Player {
    contractuntil: string;
    dateofbirth: string;
    id: number;
    jerseynumber: number;
    marketvalue: string;
    name: string;
    nationality: string;
    position: string;

    /**
     * Constructor de clase jugador
     *
     * @param contractuntil 
     * @param dateofbirth 
     * @param id 
     * @param jerseynumber 
     * @param marketvalue 
     * @param name 
     * @param nationality 
     * @param position 
     */
    constructor(
        contractuntil: string,
        dateofbirth: string,
        id: number,
        jerseynumber: number,
        marketvalue: string,
        name: string,
        nationality: string,
        position: string
    ) {
        this.contractuntil = contractuntil;
        this.dateofbirth = dateofbirth;
        this.id = id;
        this.jerseynumber = jerseynumber;
        this.marketvalue = marketvalue;
        this.name = name;
        this.nationality = nationality;
        this.position = position;
    }
}
