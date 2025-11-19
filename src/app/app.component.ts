import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteComponent } from '../site/site.component';
import { HomeComponent } from "../home/home.component";
import { CarrinhoComponent } from "../carrinho/carrinho.component";
import { LoginComponent } from "../login/login.component";
import { ProdutoComponent } from "../produto/produto.component";
import { ProdutosComponent } from "../produtos/produtos.component";
import { CadastroComponent } from '../cadastro/cadastro.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CadastroComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dezlumbrante-projeto-pi';
}