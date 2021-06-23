export class Chats {
    public user_id_origen: string;
    public user_id_destino: string;
    public id_chatRoom: string;
    public Nombre: string;
    public Email: string;
    public Foto: string;

    constructor(user_id_origen: string, user_id_destino: string, id_chatRoom: string, Nombre: string, Email: string, Foto: string) {
        this.user_id_origen = user_id_origen;
        this.user_id_destino = user_id_destino;
        this.id_chatRoom = id_chatRoom;
        this.Nombre = Nombre;
        this.Email = Email;
        this.Foto = Foto;
    }

}
