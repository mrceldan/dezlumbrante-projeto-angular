import { Route } from '@angular/router'; 
import { SiteComponent } from '../site/site.component';
import { HomeComponent } from '../home/home.component';

export const routes: Route[] = [
  { path: '', component: SiteComponent, title: 'Dezlumbrante Capa' },
  { path: 'home', component: HomeComponent, title: 'Dezlumbrante Loja' },
  { path: '**', redirectTo: '' } 
];
