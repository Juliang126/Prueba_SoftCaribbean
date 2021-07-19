import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/cliente';

  traerInfoApp() {

    console.log(`${this.Url}/nombre`);
    return this.http.get(`${this.Url}/nombre`, {responseType:'text'});

    /*this.http.get("http://localhost:8080/cliente/nombre", {responseType:'text'}).subscribe((resp:any) =>{
      this.title = resp;
    }), (error:any) =>{
      console.log(error);
    }
    
    this.http.get("http://localhost:8080/cliente/descripcion", {responseType:'text'}).subscribe((resp:any) =>{
      this.description = resp;
    }), (error:any) =>{
      console.log(error);
    }*/

  }
  
  listarCliente() {
    console.log(`${this.Url}/listar`);
    return this.http.get<Cliente[]>(`${this.Url}/listar`);
  }

  registrarCliente(cliente:Cliente) {
    return this.http.post<Cliente>(`${this.Url}/registrar`, cliente);
  }

}
