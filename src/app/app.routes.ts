import { Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, title: 'Home'},
    { path: 'about', component: AboutComponent, title: 'About'},
    { path: 'contact', component: ContactComponent, title: 'Contact'},
    { path:'portfolio', component: PortfolioComponent, title: 'Portfolio'},
    { path: '**', redirectTo: '/home' }
];
