import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { DataService } from './services/data.service';
import { HttpservisService } from './services/httpservis.service';
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
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'sledeca',
        component: SledecaComponent
      }
    ])
  ],
  providers: [DataService, MyserviceService, HttpservisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
