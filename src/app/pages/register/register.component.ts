import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from '../../services/api.service' 
import  Swal  from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 
 constructor(private fb:FormBuilder, private location:Location, private api:ApiService, private router:Router) { }
  addUserForm = this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required]
  });

  get f(){
    return this.addUserForm.controls;
  }

  ngOnInit(): void {
  }

  submit(){
    const data = new FormData();
    data.append('email', this.addUserForm?.get('email')?.value);
    data.append('password', this.addUserForm?.get('password')?.value);

    this.api.addUser(data).subscribe((response:any)=>{
        Swal.fire('success','You have been registered successfully', 'success');
        this.router.navigate(['/login']);
            
    },(error:any)=>{
      Swal.fire('error',error.message, 'error');
    });
  }
  // OnBack(){
  //   this.location.back();
  // }
  // logout(){
  //   localStorage.setItem('role', null);
  //   this.router.navigate(['/login']);
  // }
}
