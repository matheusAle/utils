import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ut-ex-load-input',
  templateUrl: './load-input.component.html',
  styleUrls: ['./load-input.component.scss']
})
export class LoadInputComponent implements OnInit {

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
  
  someActionNoPromise() {
    return parseInt((Math.random() * 10).toFixed(0)) % 2 == 0;
  }
}
