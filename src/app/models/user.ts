export class User {
    public id?:number;
    public email?:string;
    public nombre?:string;
    public apellido?:string;
    public token?:string;
    public password?:string;

    constructor(id?:number,email?:string,nombre?:string,apellido?:string,token?:string,password?:string){
        this.id = id;
        this.email = email;
        this.nombre = nombre;
        this.apellido = apellido;
        this.token = token;
        this.password = password;
    }
}
