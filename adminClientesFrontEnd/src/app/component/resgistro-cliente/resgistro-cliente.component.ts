import { ANALYZE_FOR_ENTRY_COMPONENTS, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { ClienteServiceService } from 'src/app/service/cliente-service.service';

@Component({
  selector: 'app-resgistro-cliente',
  templateUrl: './resgistro-cliente.component.html',
  styleUrls: ['./resgistro-cliente.component.css']
})
export class ResgistroClienteComponent implements OnInit {

  cliente:Cliente = new Cliente();
  constructor(private service:ClienteServiceService, private router:Router) { }

  ngOnInit(): void {
  }
  
  registrarCliente(cliente:Cliente) {
    this.service.registrarCliente(cliente).subscribe(data =>
      {alert("El Cliente "+cliente.nombre+" "+cliente.apellidos+" se ha registrado exitosamente")});
    this.router.navigate(["listar"]);
  }

}
