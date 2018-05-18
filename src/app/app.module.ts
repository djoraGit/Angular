import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { DataService } from './services/data.service';
import { MyserviceService } from './services/myservice.service';
import { NovaKomponentaComponent } from './components/nova-komponenta/nova-komponenta.component';
import { PromeniTekstDirective } from './directives/promeni-tekst.directive';
import { SqrtPipe } from './pipes/sqrt.pipe';
import { SledecaComponent } from './components/sledeca/sledeca.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NovaKomponentaComponent,
    PromeniTekstDirective,
    SqrtPipe,
    SledecaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'sledeca',
        component: SledecaComponent
      }
    ])
  ],
  providers: [DataService, MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
