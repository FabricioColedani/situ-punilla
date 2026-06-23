import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // <-- Importamos el cliente HTTP

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient); // <-- Inyectamos el servicio HTTP

  // ⚠️ REEMPLAZA ESTO CON EL ID DE TU FORMULARIO DE FORMSPREE
  private formspreeUrl = 'https://formspree.io/f/mpqgwalz'; 

  contactForm: FormGroup;
  enviado: boolean = false;
  cargando: boolean = false; // Deshabilita el botón mientras viaja el mail

  constructor() {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.cargando = true;

    // Enviamos los datos por método POST a Formspree
    this.http.post(this.formspreeUrl, this.contactForm.value).subscribe({
      next: (response) => {
        this.enviado = true;
        this.cargando = false;
        this.contactForm.reset();
        
        // Ocultamos el mensaje de éxito después de 5 segundos
        setTimeout(() => this.enviado = false, 5000);
      },
      error: (error) => {
        console.error('Error al enviar a Formspree:', error);
        alert('Hubo un problema al enviar tu mensaje. Por favor, intentá de nuevo.');
        this.cargando = false;
      }
    });
  }
}