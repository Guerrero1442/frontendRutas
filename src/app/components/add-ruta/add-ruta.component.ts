import { Component, OnInit } from '@angular/core';
import { Conductor } from 'src/app/models/conductor';
import { Ruta } from 'src/app/models/ruta';
import { ConductorService } from 'src/app/services/conductor.service';
import { RutasService } from 'src/app/services/ruta.service';


@Component({
  selector: 'app-add-ruta',
  templateUrl: './add-ruta.component.html',
  styleUrls: ['./add-ruta.component.css']
})
export class AddRutaComponent implements OnInit {
  titulo = "Agregar ruta"
  conductoresSet:Conductor[];
  ruta=new Ruta();
  submitted=false;
  msgError='';
  exist=false;

  constructor(private rutaService:RutasService, private conductoresService:ConductorService) { 
    this.getConductores()
  }

  ngOnInit(): void {
  }

  existPk(val:number):void {
    this.rutaService.get(val).subscribe(
      data => {
        console.log(data);
        this.exist = true
      },
      error => {
        this.exist = false
        console.log(error);
      }
    )
  }

  saveRuta():void {
    const data = {
      id: this.ruta.id,
      numero_bus: this.ruta.numero_bus,
      fecha_hora: this.ruta.fecha_hora,
      cantidad_sillas: this.ruta.cantidad_sillas,
      conductor: this.ruta.conductor
    }
    console.log(this.ruta.conductor)
    
    this.rutaService.create(data).subscribe(
      data => {
        this.submitted=true;
        console.log(data)
      },
      error => {
        this.msgError = error.message + ' \n ' + error.error.message;
        console.log(error)
      }
    )
  }

  newRuta() {
    this.submitted;
    this.ruta.id;
    this.ruta.numero_bus;
    this.ruta.fecha_hora;
    this.ruta.cantidad_sillas;
    this.ruta.conductor;
  }

  getConductores() {
    this.conductoresService.getAll().subscribe(
      data => {
        this.conductoresSet = data;
        console.log(data);
      },
      error => {
        console.log(error)
      }
    )
  }
}
