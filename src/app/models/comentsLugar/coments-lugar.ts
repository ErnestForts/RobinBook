export class ComentsLugar {
    public Nombre: string;
    public Apellido: string;
    public Foto: string;
    public Coment: string;
    public id_ComentLugar?: string;
    public LikeComent?: string;

    constructor(Nombre: string, Apellido: string, Foto: string, Coment: string, id_ComentLugar?: string, LikeComent?: string){ 
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Foto = Foto;
        this.Coment = Coment;
    }
}
