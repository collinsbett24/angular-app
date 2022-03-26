import { Routes } from "@angular/router";


import { AdminLayoutComponent } from './admin-layout.component';
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { HomepageComponent } from '../../pages/homepage/homepage.component';
import { EditusersComponent } from '../../pages/editusers/editusers.component';
import { AccountComponent } from '../../pages/account/account.component';


export const AdminLayoutRoutes: Routes = [
  { path: 'adminlayout', component:AdminLayoutComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: 'login', component:LoginComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'homepage', component:HomepageComponent},
  { path: 'editusers/:id', component:EditusersComponent},
  { path: 'account', component:AccountComponent }
  
];
