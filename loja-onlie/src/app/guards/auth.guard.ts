import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';

export const authGuard: CanActivateFn = (route, state) => {
  // Injeta os serviços 
  const auth = inject(Auth);
  const router = inject(Router);
  const logado = auth.estaLogado();
  // Faz a pergunta direta e síncrona
  if (logado) {
    return true; 
  } else {
    // Redireciona para o login.
    return router.createUrlTree(['/login']);
  }
};