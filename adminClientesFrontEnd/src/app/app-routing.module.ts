import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClientesComponent } from './component/lista-clientes/lista-clientes.component';
import { ResgistroClienteComponent } from './component/resgistro-cliente/resgistro-cliente.component';

const routes: Routes = [
  {path:'listar',component:ListaClientesComponent},
  {path:'resgitrar',component:ResgistroClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
