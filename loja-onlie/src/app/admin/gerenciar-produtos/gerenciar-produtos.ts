import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../modelos/produto';
import { Product } from '../../services/product';

@Component({
  selector: 'app-gerenciar-produtos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gerenciar-produtos.html',
  styleUrls: ['./gerenciar-produtos.css']
})
export class GerenciarProdutos implements OnInit {
  produtos: Produto[] = [];

  constructor(private productService: Product) { }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.productService.getProducts().subscribe(data => {
      this.produtos = data;
    });
  }

  deletarProduto(id: number): void {
    // Pede confirmação ao usuário para evitar exclusões acidentais
    if (confirm('Tem certeza que deseja deletar este produto?')) {
      this.productService.deletarProduto(id).subscribe({
        next: () => {
          alert('Produto deletado com sucesso!');
          // Atualiza a interface removendo o produto da lista local
          this.produtos = this.produtos.filter(p => p.id !== id);
        },
        error: (err) => {
          alert('Ocorreu um erro ao deletar o produto.');
          console.error(err);
        }
      });
    }
  }
}