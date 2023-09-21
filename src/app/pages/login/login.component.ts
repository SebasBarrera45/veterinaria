import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();

  Formulario: FormGroup = this.fb.group({
    correo: [, [Validators.required, Validators.email]],
    pass: [, Validators.required]
  });

  hide = true;


  constructor(private fb: FormBuilder, private data: DataService, private router: Router) {

    localStorage.removeItem('idUsuario');
  }

Login() {
   this.data.post('usuario', 'login', this.Formulario.value).subscribe((dato: any) => {

     if (dato.idusuario = 1 ) {
       console.log("exitoso");
       localStorage.setItem('idusuario', dato.idusuario)
       console.log(dato.tipo);
       this.router.navigate(['/agregar']);

     } else {

       Swal.fire({
         title: 'Error',
         text: "No se ha encontrado al usuario ",
         icon: 'error',
         showCancelButton: false,
         confirmButtonColor: 'red',
         confirmButtonText: 'Aceptar'
       }).then((result) => {
        if (result.isConfirmed) {
           this.router.navigate(['/login']);
         }
       })

     }
   });
  }
}
