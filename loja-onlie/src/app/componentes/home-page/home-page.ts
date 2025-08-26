import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Produto } from '../../modelos/produto';
import { Product } from '../../services/product';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css']
})
export class HomePage implements OnInit {
  produtosDestaque: Produto[] = [];
  categorias: string[] = [];

  constructor(private productService: Product) {}

  ngOnInit(): void {
    // Busca 4 produtos para destaque
    this.productService.getProducts().subscribe(todos => {
      this.produtosDestaque = todos.slice(0, 4);
    });

    // Busca as categorias
    this.productService.getCategorias().subscribe(cats => {
      this.categorias = cats;
    });
  }
}