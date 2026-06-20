import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  standalone: true,
  templateUrl: './servicios.html',
  styleUrl: './servicios.css'
})
export class Servicios {
  // Variable para controlar qué línea de colectivo se muestra (Por defecto Línea A)
  lineaActiva: string = 'lineaA';
  
  // Variable para controlar si el usuario habilitó el mapa o si está bloqueado para scroll
  mapaInteractivo: boolean = false;

  // Función para cambiar de pestaña
  cambiarLinea(linea: string) {
    this.lineaActiva = linea;
    this.mapaInteractivo = false; // Bloquea el mapa de nuevo al cambiar de pestaña
  }

  // Función para desbloquear el mapa y permitir zoom/movimiento
  activarMapa() {
    this.mapaInteractivo = true;
  }
}