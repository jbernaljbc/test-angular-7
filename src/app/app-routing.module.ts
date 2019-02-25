import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from '../app/login/login.component'
import { LogoutComponent } from '../app/logout/logout.component'
import { OcComponent } from '../app/oc/oc.component'
import { OcDetailComponent } from '../app/oc-detail/oc-detail.component'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'oc', component: OcComponent },
  { path: 'oc/detail/:code', component: OcDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
