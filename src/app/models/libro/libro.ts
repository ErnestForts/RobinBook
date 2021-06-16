export class Libro {
    public liro_id : number;
    public titulo : string;
    public autor : string;
    public description : string;
    public foto: string;

    constructor(titulo : string, autor : string, description : string, foto : string){ 
        this.titulo = titulo;
        this.autor = autor;
        this.description = description;
        this.foto = foto;
    }
}
