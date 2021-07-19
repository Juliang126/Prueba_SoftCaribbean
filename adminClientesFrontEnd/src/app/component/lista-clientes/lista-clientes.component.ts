import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { ClienteServiceService } from 'src/app/service/cliente-service.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  constructor(private service:ClienteServiceService, private router:Router) { 
  }

  clientes:Cliente[] | undefined;

  ngOnInit(): void {
    this.service.listarCliente().subscribe(data => {this.clientes=data})
  }

}
