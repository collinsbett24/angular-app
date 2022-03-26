import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CountdownModule } from 'ngx-countdown';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { alarm, eyeFill, alignBottom } from 'ngx-bootstrap-icons';

// Select some icons (use an object, not an array)
const icons = {
  alarm,
  eyeFill,
  alignBottom
};


import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { HomepageComponent } from '../../pages/homepage/homepage.component';
import { EditusersComponent } from '../../pages/editusers/editusers.component';
import { AccountComponent } from '../../pages/account/account.component';


import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    CountdownModule,
    NgxBootstrapIconsModule.pick(icons, { 
        width: '2em', 
        height: '2em',
    }),
  ],
  declarations: [
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    EditusersComponent,AccountComponent
  ]
})
export class AdminLayoutModule {}
