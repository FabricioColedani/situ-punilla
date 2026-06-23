import { Component, OnInit } from '@angular/core';

// Definimos la estructura de nuestras novedades
interface Novedad {
  id: number;
  titulo: string;
  extracto: string;
  textoCompleto: string;
  fecha: string;
  categoria: string;
  imagen: string;
  expandido?: boolean; // Variable para saber si la tarjeta está abierta
}

@Component({
  selector: 'app-blog',
  standalone: true,
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog implements OnInit {

  // --- DATOS DE PRUEBA (MOCK DATA) ---
  novedades: Novedad[] = [
    {
      id: 1,
      titulo: 'Desvío temporal por obras en Ruta 38',
      extracto: 'Debido a tareas de repavimentación a la altura de Valle Hermoso, las líneas urbanas sufrirán un desvío de 3 cuadras por calle San Martín hasta el próximo viernes.',
      textoCompleto: 'Debido a tareas de repavimentación a la altura de Valle Hermoso, las líneas urbanas sufrirán un desvío de 3 cuadras por calle San Martín hasta el próximo viernes. Se recomienda a todos los usuarios salir con al menos 10 minutos de anticipación. Las paradas ubicadas frente a la plaza principal quedarán temporalmente anuladas y se trasladarán a la esquina de calle Belgrano.',
      fecha: '23 Jun 2026',
      categoria: 'Alertas',
      imagen: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 2,
      titulo: 'Nuevos horarios de temporada invierno',
      extracto: 'A partir del 1 de Julio entran en vigencia las frecuencias de invierno. Habrá un refuerzo de unidades en horario escolar (07:00hs y 13:00hs).',
      textoCompleto: 'A partir del 1 de Julio entran en vigencia las frecuencias de invierno. Habrá un refuerzo de unidades en horario escolar (07:00hs y 13:00hs) para garantizar que los estudiantes viajen cómodos. Además, el último servicio nocturno se adelanta 30 minutos, saliendo de la terminal a las 23:30hs. Revisa la sección de "Horarios" en la app para ver el cronograma completo.',
      fecha: '20 Jun 2026',
      categoria: 'Horarios',
      imagen: 'https://cdn.milenio.com/uploads/media/2020/09/14/cambio-de-horario-invierno-shutterstock_0_0_1200_747.jpg'
    },
    {
      id: 3,
      titulo: 'Ampliación de recorrido hacia La Falda',
      extracto: 'La Línea 2 suma 4 nuevas paradas conectando directamente con el Hospital Municipal de La Falda, mejorando el acceso a la salud para todos los vecinos.',
      textoCompleto: 'La Línea 2 suma 4 nuevas paradas conectando directamente con el Hospital Municipal de La Falda, mejorando el acceso a la salud para todos los vecinos. Este nuevo tramo funcionará todos los días de 06:00hs a 20:00hs. Las nuevas paradas están completamente señalizadas e incluyen rampas de accesibilidad para personas con movilidad reducida.',
      fecha: '18 Jun 2026',
      categoria: 'Recorridos',
      imagen: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 4,
      titulo: 'App SiTu supera los 5.000 usuarios',
      extracto: 'Celebramos un nuevo hito en nuestra comunidad. Gracias a todos los vecinos de Punilla por usar la app y enviar sus sugerencias para seguir mejorando.',
      textoCompleto: 'Celebramos un nuevo hito en nuestra comunidad. Gracias a todos los vecinos de Punilla por usar la app y enviar sus sugerencias para seguir mejorando el transporte urbano. En los próximos meses estaremos lanzando nuevas funciones como el seguimiento en tiempo real de las unidades por GPS y un sistema de alertas personalizadas. ¡Gracias por confiar en SiTu!',
      fecha: '15 Jun 2026',
      categoria: 'Novedades',
      imagen: 'https://images.unsplash.com/photo-1511649475669-e288648b2339?auto=format&fit=crop&q=80&w=800'
    }
  ];

  // --- LÓGICA DE FILTRADO ---
  filtros: string[] = ['Todas', 'Alertas', 'Horarios', 'Recorridos', 'Novedades'];
  filtroActivo: string = 'Todas';
  novedadesFiltradas: Novedad[] = [];

  ngOnInit() {
    this.novedadesFiltradas = [...this.novedades];
  }

  filtrarPor(categoria: string) {
    this.filtroActivo = categoria;
    
    if (categoria === 'Todas') {
      this.novedadesFiltradas = [...this.novedades];
    } else {
      this.novedadesFiltradas = this.novedades.filter(item => item.categoria === categoria);
    }
  }

  // --- LÓGICA DE EXPANSIÓN ---
  toggleExpandir(item: Novedad) {
    item.expandido = !item.expandido;
  }

  // --- UTILIDAD PARA CLASES CSS ---
  getBadgeClass(categoria: string): string {
    switch(categoria.toLowerCase()) {
      case 'alertas': return 'badge-alerta';
      case 'horarios': return 'badge-horarios';
      case 'recorridos': return 'badge-recorridos';
      case 'novedades': return 'badge-novedades';
      default: return 'badge-default';
    }
  }
}