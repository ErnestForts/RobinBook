export class Libro {
    public libro_id?: number;
    public Titulo : string;
    public Autor : string;
    public Foto: string;
    public Descripcion : string;
    public VecesPuntuado?: number;
    public PuntosTotales?: number;

    constructor(Titulo : string, Autor : string, Foto : string, Descripcion : string){ 
        this.Titulo = Titulo;
        this.Autor = Autor;
        this.Foto = Foto;
        this.Descripcion = Descripcion;
    }
}
