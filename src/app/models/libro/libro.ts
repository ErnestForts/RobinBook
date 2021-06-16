export class Libro {
    public liro_id : number;
    public titulo : string;
    public autor : string;
    public foto: string;
    public description : string;

    constructor(titulo : string, autor : string, foto : string, description : string){ 
        this.titulo = titulo;
        this.autor = autor;
        this.foto = foto;
        this.description = description;
    }
}
