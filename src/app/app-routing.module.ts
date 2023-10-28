import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authenticatedGuard } from './services/authenticated.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
  ,
  {
    path:'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivateChild: [authenticatedGuard]
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
