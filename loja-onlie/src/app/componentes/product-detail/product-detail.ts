import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../services/product';
import { Produto } from '../../modelos/produto';
import { NgIf, CurrencyPipe } from "@angular/common";
import { Carrinho } from '../../services/carrinho';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIf, CurrencyPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail implements OnInit {

  produto?: Produto;

  constructor(private route: ActivatedRoute, 
              private productService: Product,
              private carrinho: Carrinho) {}

  ngOnInit(): void {
    const idString = this.route.snapshot.paramMap.get('id');

    if (idString) {
      const id =Number(idString);
      this.productService.getProductById(id).subscribe(dadosDoProduto => {
        this.produto = dadosDoProduto;
      });
    }

}
  adicionarAoCarrinho(): void {
    if (this.produto) {
      this.carrinho.adicionarAoCarrinho(this.produto);
      alert(`${this.produto.title} foi adicionado ao carrinho!`);
    }
  }
}