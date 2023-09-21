import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  ListaFiltrada: any = [];
  Lista: any = [];
  buscador:any=[];

  constructor(public dialogo: MatDialog, private data: DataService, private fb: FormBuilder) {
    this.listaMascotas();
  }

  Formulario: FormGroup = this.fb.group({
    idmascotas: [],
    nombre: [, [Validators.required]],
    edad:   [, [Validators.required]],
    causa:  [, [Validators.required]],
  })

  listaMascotas() {
    this.data.get('usuario', 'traerMascota').subscribe((dato: any) => {
      console.log(dato);
      this.Lista =this.ListaFiltrada  = dato;

    });
  }

  eliminar(idmascotas: any) {
    this.data.post('actividades', 'eliminarActividad', { 'idmascotas': idmascotas }).subscribe((dato: any) => {
      console.log(dato);
    });
  }
}
