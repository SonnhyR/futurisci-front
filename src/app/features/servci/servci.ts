import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-servci',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servci.html',
  styleUrl: './servci.scss',
})
export class Servci {
  features = [
    { title: 'Inmediatez Total', description: 'Notificaciones instantáneas, solución en minutos' },
    { title: 'Presupuesto Consciente', description: 'Tú fijas el precio, proveedores negocian' },
    { title: 'Seguridad y Confianza', description: 'Fondos retenidos hasta tu aprobación' },
    { title: 'Economía Inclusiva', description: 'Espacio para freelancers y emprendedores' }
  ];
}
