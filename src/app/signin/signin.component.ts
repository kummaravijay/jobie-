import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public loginForm!: FormGroup
  submitted = false;
  getproduct: any
  constructor(public formbuilder: FormBuilder, private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email:["", [Validators.required, Validators.email]],
      password:["", Validators.required]
    })
    // this.getMethod()
  }

  login() {
    // this.submitted = true
    this.getMethod()
     this.loginForm.reset();
  }
  getMethod(){
    this.http.get<any>(`${environment.baseUrl}project`)
           .subscribe(res=>{
             const user=res.find((a:any)=>{
    return a.email=== this.loginForm.value.email&&a.password=== this.loginForm.value.password
              });
            if(user){
                   alert("login success")
                   this.router.navigate(['stepper'])
              }else{
                alert("login flied")
             }
             this.loginForm.reset()
             } ,
            err=>{
              console.log(err);
             })

  }
}
