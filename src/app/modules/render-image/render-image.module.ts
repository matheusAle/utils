import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenderImageDirective } from './render-image.directive';

@NgModule({
  exports: [RenderImageDirective],
  declarations: [RenderImageDirective]
})
export class RenderImageModule { }
