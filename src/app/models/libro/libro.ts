export class Libro {
    public libro_id?: string;
    public Titulo: string;
    public Autor: string;
    public Foto: string;
    public Descripcion : string;
    public VecesPuntuado?: number;
    public PuntosTotales?: number;
    public puntuacion?: number;
    public Genero: string;

    constructor(Titulo: string, Autor: string, Foto: string, Descripcion: string, Genero: string, libro_id?: string, puntosTotales?: number, vecesPuntuado?: number){ 
        this.Titulo = Titulo;
        this.Autor = Autor;
        this.Foto = Foto;
        this.Descripcion = Descripcion;
        this.Genero = Genero;
        this.libro_id = libro_id;
        this.PuntosTotales = puntosTotales;
        this.VecesPuntuado = vecesPuntuado;
        
    }
}
