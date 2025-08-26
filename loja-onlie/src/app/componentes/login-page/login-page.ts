import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {

    credenciais = {
      username: '',
      password: ''
    }

    constructor(private auth: Auth, private router: Router) { }

    fazerLogin(): void {
      this.auth.login(this.credenciais).subscribe({
        next: (resposta) => {
          console.log('Login bem-sucedido:', resposta);
          console.log('Token recebido:', resposta.token);
          this.router.navigate(['/']); 
    },
        error: (erro) => {
          console.error('Erro ao fazer login:', erro);
          alert('Falha no login. Verifique suas credenciais.');
        }
      });
    }
  
















}
