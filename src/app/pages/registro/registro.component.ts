import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import Swal from 'sweetalert2';

interface Carreras {
  name: string;
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})

export class RegistroComponent {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
  Formulario: FormGroup = this.fb.group({
    nombre:   [, [Validators.required]],
    apellidoP: [, [Validators.required]],
    apellidoM: [, [Validators.required]],
    correo:    [, [Validators.required]],
    // correo:    [, [Validators.required, Validators.pattern(/^(l.)([a-z]{4})([0-9]{6})(@itses.edu.mx)$/)]],
    pass:    [, [Validators.required]]
  })

  carrerasControl = new FormControl<Carreras | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  carreras: Carreras[] = [
    {name: 'Sistemas'},
    {name: 'Mecánica'},
    {name: 'Diseño'},
    {name: 'Gestión'}
  ];


  hide = true;

  constructor(private fb: FormBuilder,private data: DataService,private router: Router) {

  }


  campoEsValido(campo: string) {
    return this.Formulario.controls[campo].errors && this.Formulario.controls[campo].touched;
  }

  guardar() {
    this.data.post('usuario', 'agregarUsuario', this.Formulario.value).subscribe((dato: any) => {
      console.log(dato);
      if (dato.status == true) {

        Swal.fire({
          title: 'Exito',
          text: "El usuario ha sido registrado",
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: 'red',
          confirmButtonText: 'Aceptar'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/login']);
          }
        })

      }else if (dato.code == 23000){
        Swal.fire({
          title: 'Error',
          text: "Ya existe un usuario registrado con estos datos",
          icon: 'error',
          showCancelButton: false,
          confirmButtonColor: 'red',
          confirmButtonText: 'Aceptar'
        }).then((result) => {
          if (result.isConfirmed) {
            // this.router.navigate(['/login']);
          }
        })

      }


    })
  }



}
