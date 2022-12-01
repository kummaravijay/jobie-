import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  isLinear = false;
  constructor(private fb :FormBuilder) { }
  // firstFormGroup!: FormGroup
  // secondFormGroup!: FormGroup
  ngOnInit(): void {
  //  this.firstFormGroup = this.fb.group({
  //     firstCtrl: ['', Validators.required],
  //   });
  //   this.secondFormGroup = this.fb.group({
  //     secondCtrl: ['', Validators.required],
  //   });
  }

  firstFormGroup = this.fb.group({
    firstCtrl: ['', Validators.required],
    email: ['', Validators.required],
    age: ['', Validators.required],
    address: ['', Validators.required],
    pincode: ['', Validators.required],

  });
  secondFormGroup = this.fb.group({
    secondCtrl: ['', Validators.required],
  }); 

}
