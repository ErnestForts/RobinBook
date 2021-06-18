export class RawcomentsLugar {
    public id_Lugar : string;
    public id_User : string;
    public Coment : string;

    constructor(id_Lugar : string, id_User : string, Coment : string){ 
        this.id_Lugar = id_Lugar;
        this.id_User = id_User;
        this.Coment = Coment;
    }
}
