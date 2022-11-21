import { Component, OnInit } from '@angular/core';
import { Conductor } from 'src/app/models/conductor';
import { ConductorService } from 'src/app/services/conductor.service';

@Component({
  selector: 'app-add-conductor',
  templateUrl: './add-conductor.component.html',
  styleUrls: ['./add-conductor.component.css']
})
export class AddConductorComponent implements OnInit {
  titulo="Agregar conductor"
  conductor = new Conductor();
  submitted = false
  msgError = '';
  exist=false;

  constructor(private conductorService:ConductorService) { }

  existsPk(val:number):void {
    this.conductorService.get(val).subscribe(
      data => {
        console.log(data)
        this.exist = true
      },
      error => {
        console.log(error)
        this.exist = false
      }
    )
  }

  saveConductor():void {
    const data = {
      id: this.conductor.id,
      nombre: this.conductor.nombre,
      fecha_ingreso: this.conductor.fecha_ingreso,
    };
    
    this.conductorService.create(data).subscribe(
      data => {
        this.submitted=true;
        console.log(data);
      },
      error => {
        this.msgError = error.message + ' \n ' + error.error.message;
        console.log(error)
      }
    )
  }

  newConductor() {
    this.submitted;
    this.conductor.id;
    this.conductor.nombre;
    this.conductor.fecha_ingreso;
  }
  ngOnInit(): void {
  }

}
