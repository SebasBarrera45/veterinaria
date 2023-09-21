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
      // {path: 'disponible', component: DisponibleComponent, canActivate: [AuthGuard]},
      // {path: 'disponibleE', component: DisponibleEComponent, canActivate: [AuthGuard]},
      // {path: 'finalizadas', component: FinalizadasAComponent, canActivate: [AuthGuard]},
      // {path: 'finalizadasE', component: FinalizadasEComponent, canActivate: [AuthGuard]},
      // {path: 'alumnos', component: ListaAlumnosComponent, canActivate: [AuthGuard]},
      // {path: 'pendientes', component: PendientesAComponent, canActivate: [AuthGuard]},
      // {path: 'pendientesE', component: PendientesEComponent, canActivate: [AuthGuard]},
      // {path: 'proceso', component: ProcesoAComponent, canActivate: [AuthGuard]},
      // {path: 'procesoE', component: ProcesoEComponent, canActivate: [AuthGuard]},
      { path: '**',      redirectTo: 'login' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
