export class User {
    public user_id?:number;
    public Email?:string;
    public Nombre?:string;
    public NombreCompleto?:string;
    public Apellido?:string;
    public Telefono?:string;
    public Foto?:string;
    public Frase?:string;
    public ranking?:string;

    constructor(user_id?:number,Email?:string,Nombre?:string,Apellido?:string,Telefono?:string,Foto?:string,Frase?:string, ranking?:string){
        this.user_id = user_id;
        this.Email = Email;
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.NombreCompleto = this.Nombre +" " + this.Apellido;
        this.Telefono = Telefono;
        this.Foto = Foto;
        this.Frase = Frase;
        this.ranking = ranking;
    }
}
