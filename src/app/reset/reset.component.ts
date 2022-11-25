import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show = false;
  openpopup(){
    this.show = true;
  }
  closepopup(){
    this.show = false;
  }
  classoverlay(e:any){
    if(e.target.classList.contains('overlay')){
      this.show = false
    }
  }

}
