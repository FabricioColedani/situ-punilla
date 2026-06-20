import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  // Estado booleano para controlar la visibilidad del menú móvil
  isMenuOpen: boolean = false;

  // Alterna el estado del menú
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Cierra el menú al hacer clic en un enlace o en el fondo oscuro
  closeMenu(): void {
    this.isMenuOpen = false;
  }
}