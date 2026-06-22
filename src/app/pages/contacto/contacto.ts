import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule], // Fundamental para formularios reactivos
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {
  private fb = inject(FormBuilder);
  
  contactForm: FormGroup;
  enviado: boolean = false; // Controla la vista del mensaje de éxito

  constructor() {
    // Inicialización del formulario con sus validaciones
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // Getter para facilitar el acceso a los controles en el HTML
  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    // Si el formulario es inválido, marcamos todo como tocado para mostrar errores
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    // Simulamos el envío a un servidor
    console.log('Datos enviados:', this.contactForm.value);
    
    // Mostramos mensaje de éxito
    this.enviado = true;
    this.contactForm.reset();

    // Opcional: Ocultar el mensaje de éxito después de unos segundos
    setTimeout(() => {
      this.enviado = false;
    }, 5000);
  }
}