import { Conductor } from "./conductor";

export class Ruta {
	id:number;
	numero_bus:number;
	fecha_hora:Date;
	cantidad_sillas:number;
	conductor: Conductor;
}