export class ValoracionLibro {

    public id_Libro: string;
    public id_User: string;

    constructor(id_Libro: string, id_User: string){ 
        this.id_User = id_User;
        this.id_Libro = id_Libro;
    }

}
