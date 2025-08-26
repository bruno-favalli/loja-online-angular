import { Component, OnInit } from '@angular/core';

import { Produto } from '../../modelos/produto';
import { Product } from '../../services/product';
import { NgForOf, CurrencyPipe, TitleCasePipe, CommonModule } from "@angular/common";
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Carrinho } from '../../services/carrinho';



@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgForOf, CurrencyPipe, RouterLink, TitleCasePipe, CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})

export class ProductList implements OnInit {

  todosOsProdutos: Produto[] = [];
  produtosFiltrados: Produto[] = [];

  categorias: string[] = [];
  categoriaSelecionada: string | null = null;

  
  constructor(private product: Product,
              private carrinho: Carrinho,
              private route: ActivatedRoute) { }

 ngOnInit(): void {
    this.carregarProdutos();
    this.carregarCategorias();
  }

  carregarProdutos(): void {
    this.product.getProducts().subscribe(dados => {
      this.todosOsProdutos = dados;
      this.produtosFiltrados = dados; 

      // Verifica se há um parâmetro de categoria na URL
      this.route.queryParamMap.subscribe(params => {
        const categoriaParam = params.get('categoria');
        if (categoriaParam) {
          this.filtrarPorCategoria(categoriaParam);
        }
    });
  });
  }

  carregarCategorias(): void {
    this.product.getCategorias().subscribe(dados => {
      this.categorias = dados;
    });
  }

  filtrarPorCategoria(categoria: string | null): void {
    
    console.clear();
    console.log('%c--- FILTRO ACIONADO ---', 'color: blue; font-weight: bold;');//teste
    console.log('Categoria selecionada para filtrar:', categoria);//teste
    
    this.categoriaSelecionada = categoria;
    if (categoria) {
      this.produtosFiltrados = this.todosOsProdutos.filter(
        produto => produto.category === categoria
      );
    } else {
      // Se nenhuma categoria for selecionada, mostra a lista completa
      this.produtosFiltrados = this.todosOsProdutos;
    }
    console.log('Total de produtos na lista mestra:', this.todosOsProdutos.length);//teste
    console.log('Número de produtos encontrados após o filtro:', this.produtosFiltrados.length);//teste

    if (this.todosOsProdutos.length > 0) {
      console.log('Exemplo de categoria de um produto na lista mestra:', this.todosOsProdutos[0].category);//teste
    }
  }

  adicionarAoCarrinho(produto: Produto): void {
    this.carrinho.adicionarAoCarrinho(produto);
    alert(`${produto.title} foi adicionado ao carrinho!`);
  }

}
