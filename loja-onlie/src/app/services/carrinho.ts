import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produto } from '../modelos/produto';
import { ItemCarrinho } from '../modelos/item-carrinho';

@Injectable({
  providedIn: 'root'
})
export class Carrinho { // Novo nome: CarrinhoService
  private itens: ItemCarrinho[] = [];
  private carrinhoSubject = new BehaviorSubject<ItemCarrinho[]>([]);
  carrinho$ = this.carrinhoSubject.asObservable();

  constructor() { 
    const carrinhoSalvo = localStorage.getItem('meu_app_carrinho');
    if (carrinhoSalvo) {
      this.itens = JSON.parse(carrinhoSalvo);
      this.carrinhoSubject.next([...this.itens]);
    }

  }

  private salvarCarrinho(): void {
    localStorage.setItem('meu_app_carrinho', JSON.stringify(this.itens));
    
  }

  adicionarAoCarrinho(produto: Produto): void {
    const itemExistente = this.itens.find(item => item.produto.id === produto.id);

    if (itemExistente) {
      itemExistente.quantidade++;
    } else {
      this.itens.push({ produto: produto, quantidade: 1 });
    }

    this.carrinhoSubject.next([...this.itens]);
    this.salvarCarrinho();
}

  removerItem(produtoId: number): void {
    this.itens = this.itens.filter(item => item.produto.id !== produtoId);
    this.carrinhoSubject.next([...this.itens]);
    this.salvarCarrinho();
  }

  atualizarQuantidade(produtoId: number, NovaQuantidade: number): void {
    const itemExistente = this.itens.find(item => item.produto.id === produtoId);

    if (!itemExistente) {
      return;
    }

    if (NovaQuantidade > 0) {
      itemExistente.quantidade = NovaQuantidade;
    }else{
      this.removerItem(produtoId);
      return;
    }

    this.carrinhoSubject.next([...this.itens]);
    this.salvarCarrinho();

}
}