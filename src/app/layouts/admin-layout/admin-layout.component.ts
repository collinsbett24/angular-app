import { Component, OnInit } from "@angular/core";
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: "app-admin-layout",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.scss"]
})
export class AdminLayoutComponent implements OnInit {
  public sidebarColor: string = "red";
  
  LoggedIn:boolean= false;

  constructor(private router: Router) {}
  changeSidebarColor(color){
    var sidebar = document.getElementsByClassName('sidebar')[0];
    var mainPanel = document.getElementsByClassName('main-panel')[0];

    this.sidebarColor = color;

    if(sidebar != undefined){
        sidebar.setAttribute('data',color);
    }
    if(mainPanel != undefined){
        mainPanel.setAttribute('data',color);
    }
  }
  changeDashboardColor(color){
    var body = document.getElementsByTagName('body')[0];
    if (body && color === 'white-content') {
        body.classList.add(color);
    }
    else if(body.classList.contains('white-content')) {
      body.classList.remove('white-content');
    }
  }
  handleEvent(event){
    if(event.action === 'notify'){
      // console.log('Hi!');
      this.router.navigate(['login']);
      localStorage.clear();
      Swal.fire('warning','You have been logged out.','warning');
    }
  }

  ngOnInit() {
    var token = localStorage.getItem('token');
    if(token == null){
      this.LoggedIn = false;
    }else{
      this.LoggedIn = true;
    }
  }
  logout(){
      localStorage.clear();
      this.ngOnInit();
      this.router.navigate(['']);

  }
}
