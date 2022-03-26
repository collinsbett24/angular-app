import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import Swal from 'sweetalert2';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrls: ['./editusers.component.scss']
})
export class EditusersComponent implements OnInit {

  UserEditForm = this.fb.group({
    email: ['', Validators.required],
    first_name: ['',Validators.required],
    last_name: ['',Validators.required]
  });

  UserInfo:[];

  constructor(private route: ActivatedRoute, private api:ApiService, private fb: FormBuilder ) { }

  ngOnInit(): void {
    const Id = this.route.snapshot.paramMap.get('id') || 0;;

    this.api.GetUser(Id).subscribe((response:any)=>{

      this.UserInfo = response.data;
    
    },error=>{

      Swal.fire('error', 'failed to load user information. Try again', 'error');

    });

  }

  OnSubmit(){
    var data =new FormData();

    data.append('email',this.UserEditForm?.get('email')?.value);
    data.append('first_name', this.UserEditForm.get('first_name')?.value);
    data.append('last_name', this.UserEditForm.get('last_name')?.value);

    this.api.UpdateUser(data).subscribe((response:any)=>{
      Swal.fire('succes','Data Has been Updated successfully','success');
      this.ngOnInit();
    },error=>{
      Swal.fire('error',error.message,'error');
    });
  }
}
