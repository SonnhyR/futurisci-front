import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  servicesList = [
    { icon: '💻', name: 'Desarrollo Web', description: 'Sitios y aplicaciones web modernas, responsivas y optimizadas' },
    { icon: '📱', name: 'Apps Móviles', description: 'Aplicaciones nativas e híbridas para iOS y Android' },
    { icon: '📸', name: 'Community Manager', description: 'Manejo profesional de redes sociales.', tags: [
      { icon: '📸', label: 'Instagram' },
      { icon: '🎵', label: 'TikTok' },
      { icon: '🧵', label: 'Threads' }
    ] },
    { icon: '🎬', name: 'Producción audiovisual', description: 'Producción audiovisual para comerciales, grabación, edición, contrato de talento y desarrollo de guiones.' },
    { icon: '📣', name: 'Publicidad y Marketing', description: 'Manejo y supervisión de campañas de ads.' },
    { icon: '⚙️', name: 'Automatización', description: 'Procesos automatizados con IA y RPA' },
    { icon: '☁️', name: 'Cloud Computing', description: 'Infraestructura escalable en la nube' },
    { icon: '🔒', name: 'Ciberseguridad', description: 'Protección de datos y sistemas empresariales' },
    { icon: '📊', name: 'Data Analytics', description: 'Análisis de datos para toma de decisiones' }
  ];

}
