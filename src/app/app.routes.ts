import { Routes } from '@angular/router';
import { SiteComponent } from '../site/site.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { PerfilComponent } from '../perfil/perfil.component';

export const routes: Routes = [
  { path: '', component: SiteComponent, title: 'Dezlumbrante Capa' },
  { path: 'home', component: HomeComponent, title: 'Dezlumbrante Loja' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'cadastro', component: CadastroComponent, title: 'Cadastro' },
  { path: 'perfil', component: PerfilComponent, title: 'Perfil'},
  { path: '**', redirectTo: '' }
];
