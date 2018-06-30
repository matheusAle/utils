import { NgModule } from '@angular/core';
import { LoadDirective } from './load.directive';
import { LoadSpinnerModule } from '../load-spinner/load-spinner.module';

@NgModule({
  imports: [
    LoadSpinnerModule
  ],
  declarations: [
    LoadDirective
  ],
  exports: [
    LoadDirective
  ]
})
export class LoadModule { }
