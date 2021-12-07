import { Direction } from '@angular/cdk/bidi';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  appDirection:Direction = 'ltr'
  constructor(){}
  ngOnInit(){

  }

  toggleDirection(){
    if(this.appDirection === 'ltr'){
      this.appDirection = 'rtl'
      console.log(this.appDirection );
    }else {
      this.appDirection = 'ltr';
      console.log('hii');
    }
  }
}
