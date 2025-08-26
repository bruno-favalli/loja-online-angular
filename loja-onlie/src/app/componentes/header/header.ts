import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// CORREÇÃO: Importando o serviço e o modelo corretos
import { Carrinho } from '../../services/carrinho';
import { ItemCarrinho } from '../../modelos/item-carrinho';
import { RouterLink, Router, RouterLinkActive } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header implements OnInit {
  quantidadeItens = 0;
  usuarioLogado = false;

  
  constructor(private carrinho: Carrinho,
              private auth: Auth,
              private router: Router) { }

  ngOnInit(): void {
    this.carrinho.carrinho$.subscribe((itens: ItemCarrinho[]) => { 
      this.quantidadeItens = itens.reduce((soma, item) => soma + item.quantidade, 0);
    });

    this.auth.usuarioLogado$.subscribe(status => {
      this.usuarioLogado = status;
    });
  }
logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']); 
}

}