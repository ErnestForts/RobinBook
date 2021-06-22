export class Coments {
    public Nombre: string;
    public Apellido: string;
    public Foto: string;
    public Coment: string;
    public id_ComentLibro?: string;
    public likeComent?: string;

    constructor(Nombre: string, Apellido: string, Foto: string, Coment: string, id_ComentLibro?: string, likeComent?: string){ 
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Foto = Foto;
        this.Coment = Coment;
    }
}
