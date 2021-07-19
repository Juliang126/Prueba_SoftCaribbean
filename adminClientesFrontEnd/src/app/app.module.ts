import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaClientesComponent } from './component//lista-clientes/lista-clientes.component';
import { ResgistroClienteComponent } from './component/resgistro-cliente/resgistro-cliente.component';
import { ClienteServiceService } from './service/cliente-service.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaClientesComponent,
    ResgistroClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ClienteServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
