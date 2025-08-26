import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';

interface TokenResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})

export class Auth {
  
  private apiUrl = 'https://fakestoreapi.com/auth/login';
  private usuarioLogado = new BehaviorSubject<boolean>(false);
  public usuarioLogado$ = this.usuarioLogado.asObservable();
  constructor(private http: HttpClient) { 

    this.verificarEstadoInicialLogin();

  }

  public estaLogado(): boolean {
    return this.usuarioLogado.getValue();
  }


  private verificarEstadoInicialLogin(): void {
    const token = localStorage.getItem('meu_app_token');
  
    if (token) {
      this.usuarioLogado.next(true);
    } else {
      console.log('Nenhum token encontrado. Usuário está deslogado.'); // LOG DE DEBUG
    }

  }

  login(credenciais: any): Observable<TokenResponse> {

    return this.http.post<TokenResponse>(this.apiUrl, credenciais).pipe(
      tap(resposta => {
        if (resposta.token) {
          localStorage.setItem('meu_app_token', resposta.token);
          this.usuarioLogado.next(true);
        }
      })
    );
  }
  logout(): void {
    localStorage.removeItem('meu_app_token');
    this.usuarioLogado.next(false);
  }
}
