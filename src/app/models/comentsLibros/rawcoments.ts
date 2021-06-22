export class Rawcoments {
    public id_Libro: string;
    public id_User: string;
    public Coment: string;
    public id_ComentLibro?: string;

    constructor(id_Libro: string, id_User: string, Coment: string, id_ComentLibro?: string){ 
        this.id_Libro = id_Libro;
        this.id_User = id_User;
        this.Coment = Coment;
    }
}
