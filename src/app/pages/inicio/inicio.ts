import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink], // <-- Fundamental para que funcionen los botones de navegación
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {
  // Por ahora no necesitamos lógica extra aquí. 
  // ¡El componente es súper rápido y ligero!
}