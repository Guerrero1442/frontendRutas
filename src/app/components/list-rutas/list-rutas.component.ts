import { Component, OnInit } from '@angular/core';
import { Conductor } from 'src/app/models/conductor';
import { Ruta } from 'src/app/models/ruta';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConductorService } from 'src/app/services/conductor.service';
import { RutasService } from 'src/app/services/ruta.service';
import { NgForm } from '@angular/forms';
import { SMS } from 'src/app/models/SMS';
import { SMSService } from 'src/app/services/sms.service';

@Component({
  selector: 'app-lista-rutas',
  templateUrl: './list-rutas.component.html',
  styleUrls: ['./list-rutas.component.css']
})
export class ListaRutasComponent implements OnInit {
  rutasSet:Ruta[];
  conductoresSet:Conductor[];
  sms = new SMS();
  idRuta:number;
  currentRuta:Ruta;
  msgError='';
  closeModal:string;
  phoneNumber = "+573174809715"



  constructor(private rutaService:RutasService,private conductoresService:ConductorService,private smsService:SMSService,private modalService:NgbModal) {
    this.getConductores()
    this.refreshList()
   }
  ngOnInit(): void {
  }

  triggerModal(content:any,val:Ruta) {
    this.currentRuta=val;
    this.retrieveRuta(this.currentRuta.id)
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res)=> {
      this.closeModal=`Closed with: ${res}`; 
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`
    })
  }

  private getDismissReason(reason:any):string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  retrieveRutas():void {
    this.rutaService.getAll().subscribe(
      data => {
        this.rutasSet=data
        console.log(data)
      },
      error => {
        console.log(error)
      }
    )
  }

  retrieveRuta(val:number):void {
    this.rutaService.get(val).subscribe(
      data => {
        this.currentRuta=data;
        console.log(data)
      },
      error => {
        this.msgError = error.message + ' \n ' + error.error.message;
        console.log(error)
      }
    )
  }

  updateRuta():void {
    this.rutaService.update(this.currentRuta.id, this.currentRuta).subscribe(
      data => {
        this.refreshList();
        console.log(data)
      },
      error => {
        console.log
      }
    )
  }

  saveRuta():void {
    const data2 = {
      phoneNumberTo: this.phoneNumber,
      body: "Ha borrado un registro"
    }

    this.smsService.create(data2).subscribe(
      data2 => {
        console.log(data2)
      },
      error => {
        this.msgError = error.message + ' \n ' + error.error.message;
        console.log(error)
      }
    )
  }

  deleteRuta(val1:number):void {
    this.rutaService.delete(val1).subscribe(
      data => {
        this.refreshList();
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  enviarSMS():void {
    const data = {
      phoneNumberTo: this.phoneNumber,
      body: "Ha borrado un registro"
    }
    console.log(data, 'despues de crear datos')
    this.smsService.create(data).subscribe(
      data => {
        console.log(data, 'exitoso')
      },
      error => {
        this.msgError = error.message + ' \n ' + error.error.message
        console.log(error)
      }
    )

  }

  refreshList():void {
    this.retrieveRutas();
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