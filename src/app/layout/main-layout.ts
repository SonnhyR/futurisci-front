import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../shared/components/navbar/navbar';
import { Footer } from '../shared/components/footer/footer';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, NavbarComponent, Footer],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {

}
