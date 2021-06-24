export class Lugar {
    public Lugar_id? : string;
    public Nombre : string;
    public Descripcion : string;
    public Foto : string;
    public VecesPuntuado? : number;
    public tieneLibro? : boolean;
    public latitud : number;
    public longitud : number;
    public PuntosTotales? : number;
    public puntuacion : number;

    constructor(Nombre? : string, Descripcion? : string, Foto? : string, latitud? : number, longitud? : number, tieneLibro? : boolean, Lugar_id? : string,  puntosTotales?: number, vecesPuntuado?: number){

        this.Nombre = Nombre;
        this.Descripcion = Descripcion;
        this.Foto = Foto;
        this.latitud = latitud;
        this.longitud = longitud;
        this.tieneLibro = tieneLibro;
        this.Lugar_id = Lugar_id;
        this.PuntosTotales = puntosTotales;
        this.VecesPuntuado = vecesPuntuado;
    }
}
