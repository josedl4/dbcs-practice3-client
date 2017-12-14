export class Player {
    contractuntil: string;
    dateofbirth: string;
    id: number;
    jerseynumber: number;
    marketvalue: string;
    name: string;
    nationality: string;
    position: string;

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
