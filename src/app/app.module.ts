import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoadModule } from './modules/load/load.module';
import { LoadSpinnerModule } from './modules/load-spinner/load-spinner.module';
import { RenderImageModule } from './modules/render-image/render-image.module';
import { ExemplosComponent } from './exemplos/exemplos.component';
import { LoadDirectiveComponent } from './exemplos/load-directive/load-directive.component';
import { LoadInputComponent } from './exemplos/load-input/load-input.component';
import { LoadInputModule } from './modules/load-input/load-input.module';


@NgModule({
  declarations: [
    AppComponent,
    ExemplosComponent,
    LoadDirectiveComponent,
    LoadInputComponent,
  ],
  imports: [
    BrowserModule,
    LoadModule,
    LoadSpinnerModule,
    RenderImageModule,
    LoadInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
