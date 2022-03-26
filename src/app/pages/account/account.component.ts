import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

updateForm = this.fb.group({
  email:[''],
  first_name:[''],
  last_name:[]
});

Mydetails:[];
OtherDetails:[];
  constructor(private api:ApiService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getMyAccount();
  }

  getMyAccount(){
    this.api.getMyAccount().subscribe((res:any)=>{
      this.Mydetails = res.data;
      this.OtherDetails = res.support;
      console.log(this.OtherDetails);
    },error=>{

    });

  }

  OnUpdate(myId){
    var formdata = new FormData();
    formdata.append('id',myId);
    formdata.append('email', this.updateForm.get('email').value);
    formdata.append('first_name', this.updateForm.get('first_name').value);
    formdata.append('last_name', this.updateForm.get('last_name').value);

    this.api.updateMyDetails(formdata).subscribe((response:any)=>{
      Swal.fire('success','Data Updated successfully','success');
    },error=>{
      Swal.fire('error',error.message,'error');
    });
  }

}
