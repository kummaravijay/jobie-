import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  submitted=false
  project!: FormGroup
  constructor(private fb :FormBuilder,private http:HttpClient) { }

  ngOnInit(): void {
    this.project = this.fb.group({
      fname:["",Validators.required],
      email:["",Validators.required],
      uname:["",Validators.required],
      password:["",Validators.required],
      repassword:["",Validators.required],
    })
  }
//  matchpassword(Formgroup:FormGroup) {
//  return Formgroup.controls['password'].value && Formgroup.controls['password'].value===Formgroup.controls['repassword'].value?Formgroup.controls['cpassword'].setErrors(null):Formgroup.controls['cpassword'].setErrors({'misMatch':true})
//   }
   submit(){
    this.http.post(`${environment.baseUrl}project`,this.project.value)
    .subscribe(
      data=>{
        console.log(data);
        this.project.reset();
      },err=>{
        console.log(err);
      }
    )
  }


}
