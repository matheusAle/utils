import { Component, OnInit, Input } from '@angular/core';
import { isBoolean } from 'util';

@Component({
  selector: 'ut-load-input',
  templateUrl: './load-input.component.html',
  styleUrls: ['./load-input.component.scss']
})
export class LoadInputComponent implements OnInit {
  
  public _load = false;
  public _state: boolean;
  
  @Input() input: any;
  @Input() watch: Array<any>;
  @Input() call: Function;
  @Input() timeState = 1000;
  @Input() disable = true;
  
  constructor() { }

  ngOnInit() {
    if (this.watch.includes('enter')) {
      this.input.addEventListener('keypress', (event: KeyboardEvent) => {
        if (event.keyCode == 13) {
          this.callAction(event);
        }
      });
    }
    this.watch.forEach(eventName => this.input.addEventListener(eventName, this.callAction.bind(this)));
  }
  
  callAction(event){
    if (!document.hasFocus()) { return; }
    this.input.disabled = this.disable;
    this._load = true;
    const r = this.call();
    if (r instanceof Promise) {
      r.then((data) => {
        this.end({error: false});
        return data;
      })
        .catch((e) => {
          this.end({error: true});
          throw e;
        });
    } else if (isBoolean(r)) {
      this.end({ error: <boolean>r });
    } else {
      this.end();
      
    }
  }
  
  private end(op: { error: boolean } = undefined) {
    this._load = false;
    this.input.disabled = false;    
    if (op) {
      this._state = !op.error;
      setTimeout(() => {
        this._state = undefined;
      }, this.timeState);
    } else {
      this._state = undefined;
    }
  }

}
