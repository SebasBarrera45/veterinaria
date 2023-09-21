import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthGuard } from './pages/auth/auth.guard';
import { AgregarComponent } from './pages/menu/agregar/agregar.component';
import { ModalComponent } from './pages/menu/modal/modal.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'login',    component: LoginComponent},
      {path: 'registro', component: RegistroComponent},
      {path: 'agregar', component: AgregarComponent, canActivate: [AuthGuard]},
      {path: 'modal', component: ModalComponent, canActivate: [AuthGuard]},
      { path: '**',      redirectTo: 'login' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
