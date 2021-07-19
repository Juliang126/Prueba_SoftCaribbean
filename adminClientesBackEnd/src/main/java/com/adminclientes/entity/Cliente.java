package com.adminclientes.entity;

import java.io.Serializable;
import java.util.Objects;

public class Cliente implements Serializable{
    
    private static final long serialVersionUID = 1L;
    
    private String nombre;
    private String apellidos;
    private long numeroIdentificacion;
    private String numeroCelular;
    private String correoElectronico;
    	
    /**
     * @return the nombre
     */
    public String getNombre() {
        return nombre;
    }
    /**
     * @param nombre the nombre to set
     */
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    /**
     * @return the apellidos
     */
    public String getApellidos() {
        return apellidos;
    }
    /**
     * @param apellidos the apellidos to set
     */
    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }
    
    /**
     * @return the numeroIdentificacion
     */
    public long getNumeroIdentificacion() {
        return numeroIdentificacion;
    }
    /**
     * @param numeroIdentificacion the numeroIdentificacion to set
     */
    public void setNumeroIdentificacion(long numeroIdentificacion) {
        this.numeroIdentificacion = numeroIdentificacion;
    }
    
    /**
     * @return the numeroCelular
     */
    public String getNumeroCelular() {
        return numeroCelular;
    }
    /**
     * @param numeroCelular the numeroCelular to set
     */
    public void setNumeroCelular(String numeroCelular) {
        this.numeroCelular = numeroCelular;
    }
    
    /**
     * @return the correoElectronico
     */
    public String getCorreoElectronico() {
        return correoElectronico;
    }
    /**
     * @param correoElectronico the correoElectronico to set
     */
    public void setCorreoElectronico(String correoElectronico) {
        this.correoElectronico = correoElectronico;
    }
    
    
    @Override
    public int hashCode() {
        return Objects.hash(apellidos, correoElectronico, nombre, numeroCelular, numeroIdentificacion);
    }
    
    /**
     * @param id
     * @param nombre
     * @param apellidos
     * @param numeroIdentificacion
     * @param numeroCelular
     * @param correoElectronico
     */
    public Cliente(String nombre, String apellidos, long numeroIdentificacion, String numeroCelular, String correoElectronico) {
        super();
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.numeroIdentificacion = numeroIdentificacion;
        this.numeroCelular = numeroCelular;
        this.correoElectronico = correoElectronico;
    }
    
    /**
     * 
     */
    public Cliente() {
        super();
    }
    
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (!(obj instanceof Cliente))
            return false;
        Cliente other = (Cliente) obj;
        return Objects.equals(apellidos, other.apellidos) && Objects.equals(correoElectronico, other.correoElectronico)
                && Objects.equals(nombre, other.nombre) && numeroCelular == other.numeroCelular
                && numeroIdentificacion == other.numeroIdentificacion;
    }
    
    @Override
    public String toString() {
        return "Cliente [nombre=" + nombre + ", apellidos=" + apellidos + ", numeroIdentificacion="
                + numeroIdentificacion + ", numeroCelular=" + numeroCelular + ", correoElectronico=" + correoElectronico
                + "]";
    }
    
}
