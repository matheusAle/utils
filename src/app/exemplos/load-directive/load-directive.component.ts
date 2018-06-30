import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ut-ex-load-directive',
  templateUrl: './load-directive.component.html',
  styleUrls: ['./load-directive.component.scss']
})
export class LoadDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  someAction(): Promise<any> {
    return new Promise(((resolve, reject) => {
      setTimeout(() => {
        resolve('someVelue');
      }, 3000);
    }).bind(this))
  }
  
  someActionError(): Promise<any> {
    return new Promise(((resolve, reject) => {
      setTimeout(() => {
        reject('someError');
      }, 3000);
    }).bind(this))
  }
}
