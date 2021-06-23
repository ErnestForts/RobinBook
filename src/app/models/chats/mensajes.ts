export class Mensajes {
    public id_mensaje?: string;
    public id_chatRoom: string;
    public mensaje: string;
    public user_id: string;

    constructor(id_chatRoom: string, mensaje: string, user_id: string, id_mensaje?: string) {
        this.id_chatRoom = id_chatRoom;
        this.mensaje = mensaje;
        this.user_id = user_id;
    }
}
