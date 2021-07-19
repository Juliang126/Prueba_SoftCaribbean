package com.adminclientes.rest;

import java.io.IOException;
import java.util.HashMap;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.adminclientes.entity.Cliente;
import com.adminclientes.model.ArbolB;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/adminCliente")
public class AdminClientesRest {
    
    @GetMapping("/nombre")
    public String nombreSitioWeb() {
        return "Administrador de Clientes";
    }
    
    @GetMapping("/descripcion")
    public String descripcionSitioWeb() {
        return "Sistema administrador de clientes";
    }
    
    @PostMapping("/registrar")
    public ResponseEntity<?> create (@RequestBody Cliente cliente) throws IOException {
        ArbolB<Cliente, Long> b = new ArbolB<>(4);
        b.insert(cliente, cliente.getNumeroIdentificacion());
        return ResponseEntity.status(HttpStatus.CREATED).body("OK");
    }
    
    @GetMapping("/listar")
    public String obtenerClientes() throws JsonProcessingException {
        ArbolB<Cliente, Long> b = new ArbolB<>(4);
        HashMap<Long, Cliente> dbClientes = b.obtenerBDCliente();
        String json = new ObjectMapper().writeValueAsString(dbClientes.values());
        return json;
    }
    
}
