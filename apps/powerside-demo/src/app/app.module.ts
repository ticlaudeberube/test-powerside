import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponentComponent } from './demo/demo.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListeInscriptionsComponent } from './liste-inscriptions/liste-inscriptions.component';
import { TickerComponent } from './ticker/ticker.component/ticker.component.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponentComponent,
    InscriptionComponent,
    ListeInscriptionsComponent,
    TickerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
