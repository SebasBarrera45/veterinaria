import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  Lista: any = [];

  constructor(private data: DataService,private fb: FormBuilder) {
  }
  Formulario: FormGroup = this.fb.group({
    idmascotas: [],
    nombre: [, [Validators.required]],
    edad: [, [Validators.required]],
    causa: [, [Validators.required]]

  })
  campoEsValido(campo: string) {
    return this.Formulario.controls[campo].errors && this.Formulario.controls[campo].touched;
  }

  ngOnInit() {
  }

  guardar() {
    this.data.post('actividades', 'editarActividad', this.Formulario.value).subscribe((dato: any) => {
      console.log(dato);
      if (['estatus']) {
        Swal.fire({
          title: 'Exito',
          text: "Se ha actualizado la actividad",
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: 'red',
          confirmButtonText: 'Aceptar'
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        })
        console.log("Exito");
      } else {
        Swal.fire(
          'Error',
          'No se ha podido actualizar la actividad',
          'warning'
        )
      }
    })
  }

}
