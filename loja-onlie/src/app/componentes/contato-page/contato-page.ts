import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './contato-page.html',
  styleUrl: './contato-page.css'
})
export class ContatoPage {

  dadosFormulario = {
    nome: '',
    email: '',
    mensagem: ''
  }

  constructor() { }

  enviarFormulario(): void {
  
    console.log('Dados do formulário:', this.dadosFormulario);
    alert(`Formulário enviado com sucesso! Obrigado  ${this.dadosFormulario.nome}`);
  

  this.dadosFormulario = {
    nome: '',
    email: '',
    mensagem: ''
  }

}
}
