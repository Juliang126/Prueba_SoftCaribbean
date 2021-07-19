import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ClienteServiceService } from './service/cliente-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  description = '';
  constructor(private service:ClienteServiceService, private router:Router) { }

  ngOnInit() {
    this.obtenerTitulo();
  }

  listarClientes(){
    this.router.navigate(["listar"]);
  }

  registrarCliente(){
    this.router.navigate(["resgitrar"]);
  }

  obtenerTitulo(){
    this.service.traerInfoApp().subscribe(data => {this.title=data.toString();});
  }
}
