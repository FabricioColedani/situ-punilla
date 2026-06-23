import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { SobreNosotros } from './pages/sobre-nosotros/sobre-nosotros';
import { Servicios} from './pages/servicios/servicios';
import { Galeria } from './pages/galeria/galeria';
import { Blog } from './pages/blog/blog';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
  { path: '', component: Inicio }, // Ruta por defecto (Home)
  { path: 'sobre-nosotros', component: SobreNosotros },
  { path: 'servicios', component: Servicios },
  { path: 'galeria', component: Galeria },
  { path: 'blog', component: Blog },
  { path: 'contacto', component: Contacto },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirige al inicio si la URL no existe
];