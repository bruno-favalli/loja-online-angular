import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Auth } from '../services/auth';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
 
  const auth = inject(Auth);//Saber se o usuário está autenticado

  if (auth.estaLogado()) {
    const token = localStorage.getItem('meu_app_token');//se estiver logado, pega o token

    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}` //adiciona o token no cabeçalho da requisição
      }
    });
    return next(authReq); //envia a requisição modificada

  }else{
    return next(req);
  }
};
