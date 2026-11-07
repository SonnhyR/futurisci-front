import { Component, HostListener, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-network-bg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './network-bg.html',
  styleUrls: ['./network-bg.scss']
})
export class NetworkBgComponent implements AfterViewInit, OnDestroy {
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private animationId!: number;
  private mouseX = 0;
  private mouseY = 0;
  private particles: Particle[] = [];
  private connections: Connection[] = [];
  private time = 0;

  ngAfterViewInit() {
    this.canvas = document.querySelector('#networkCanvas') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d')!;
    this.initCanvas();
    this.initParticles();
    this.animate();
    window.addEventListener('resize', () => this.initCanvas());
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animationId);
    window.removeEventListener('resize', () => this.initCanvas());
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  private initCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  private initParticles() {
    const particleCount = Math.min(120, Math.floor(window.innerWidth / 15));
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        originalX: Math.random() * this.canvas.width,
        originalY: Math.random() * this.canvas.height,
        phase: Math.random() * Math.PI * 2
      });
    }
  }

  private animate() {
    this.time += 0.01;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Actualizar partículas
    this.particles.forEach(particle => {
      // Movimiento ondulatorio
      particle.x = particle.originalX + Math.sin(this.time + particle.phase) * 15;
      particle.y = particle.originalY + Math.cos(this.time * 0.7 + particle.phase) * 15;
      
      // Influencia del mouse
      const dx = this.mouseX - particle.x;
      const dy = this.mouseY - particle.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150) {
        const angle = Math.atan2(dy, dx);
        const force = (150 - dist) / 150 * 2;
        particle.x -= Math.cos(angle) * force;
        particle.y -= Math.sin(angle) * force;
      }
      
      // Dibujar partícula
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      
      const gradient = this.ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 2);
      gradient.addColorStop(0, '#00F0FF');
      gradient.addColorStop(1, '#8B5CF6');
      this.ctx.fillStyle = gradient;
      this.ctx.fill();
    });
    
    // Dibujar conexiones
    this.ctx.beginPath();
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 120) {
          const opacity = (1 - dist / 120) * 0.3;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          
          const gradient = this.ctx.createLinearGradient(
            this.particles[i].x, this.particles[i].y,
            this.particles[j].x, this.particles[j].y
          );
          gradient.addColorStop(0, `rgba(0, 240, 255, ${opacity})`);
          gradient.addColorStop(1, `rgba(139, 92, 246, ${opacity})`);
          
          this.ctx.strokeStyle = gradient;
          this.ctx.lineWidth = 0.8;
          this.ctx.stroke();
        }
      }
    }
    
    // Efecto glow alrededor del mouse
    if (this.mouseX > 0 && this.mouseY > 0) {
      const gradient = this.ctx.createRadialGradient(this.mouseX, this.mouseY, 0, this.mouseX, this.mouseY, 200);
      gradient.addColorStop(0, 'rgba(0, 240, 255, 0.08)');
      gradient.addColorStop(1, 'rgba(0, 240, 255, 0)');
      this.ctx.fillStyle = gradient;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
    this.animationId = requestAnimationFrame(() => this.animate());
  }
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  originalX: number;
  originalY: number;
  phase: number;
}

interface Connection {
  from: number;
  to: number;
  opacity: number;
}