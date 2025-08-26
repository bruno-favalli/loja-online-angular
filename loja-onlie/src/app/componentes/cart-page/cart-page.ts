import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ RouterLink } from '@angular/router';
import { Carrinho } from '../../services/carrinho';
import { ItemCarrinho } from '../../modelos/item-carrinho';

@Component({
  selector: 'app-cart-page',
  imports: [CommonModule, RouterLink],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css'
})
export class CartPage implements OnInit {
  itensDoCarrinho: ItemCarrinho[] = [];
  valorTotal: number = 0;

  constructor(private carrinho: Carrinho) { }

  ngOnInit(): void {
    this.carrinho.carrinho$.subscribe((itens: ItemCarrinho[]) => { 
      this.itensDoCarrinho = itens;
      this.calcularTotal();
    });
}

  calcularTotal(): void {
    this.valorTotal = this.itensDoCarrinho.reduce((soma, item) => soma + (item.produto.price * item.quantidade), 0);
}

removerItem(produtoId: number): void {
  this.carrinho.removerItem(produtoId);
}

atualizarQuantidade(item: ItemCarrinho, novaQuantidade: number): void {
  this.carrinho.atualizarQuantidade(item.produto.id, novaQuantidade);
}

getValue(event: Event): number {
  return Number((event.target as HTMLInputElement).value); 
}


}
