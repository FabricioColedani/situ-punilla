import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// 1. Importa los componentes aquí arriba
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Agrégalos al arreglo de imports para que el HTML los reconozca
  imports: [RouterOutlet, Navbar, Footer], 
  templateUrl: './app.html', // (o './app.html' si tu archivo se llama así)
  styleUrl: './app.css'
})
export class App {
  title = 'situ-app';
}