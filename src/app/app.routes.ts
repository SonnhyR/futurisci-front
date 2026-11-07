import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            { path: '', loadComponent: () => import('./features/home/home').then(m => m.HomeComponent) },
            { path: 'about', loadComponent: () => import('./features/about/about').then(m => m.About) },
            { path: 'services', loadComponent: () => import('./features/services/services').then(m => m.Services) },
            { path: 'servci', loadComponent: () => import('./features/servci/servci').then(m => m.Servci) },
            { path: 'contact', loadComponent: () => import('./features/contact/contact').then(m => m.Contact) },
        ]
    }
];