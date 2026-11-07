import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NetworkBgComponent } from '../../shared/components/network-bg/network-bg';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, NetworkBgComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {}