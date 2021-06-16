export class Lugar {
    public id : number,
    public nombre : string,
    public descripcion : string,
    public foto : string,
    public puntuacion : number,
    public tieneLibro : boolean;
    public latitud : number;
    public longitud : number;

    constructor(id? : number, nombre? : string, descripcion? : string, foto? : string, puntuacion? : number, tieneLibro? : boolean, latitud? : number, longitud? : number){
        
    }
}
