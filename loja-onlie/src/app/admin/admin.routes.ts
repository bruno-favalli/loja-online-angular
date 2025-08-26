// ARQUIVO: src/app/admin/admin.routes.ts
import { Routes } from '@angular/router';
import { AdminLayout } from './admin-layout/admin-layout';
import { GerenciarProdutos } from './gerenciar-produtos/gerenciar-produtos';

export const ADMIN_ROUTES: Routes = [
  {
    path: '', // Rota pai /admin
    component: AdminLayout,
    children: [
      {
        path: '', // Redireciona /admin para /admin/produtos
        redirectTo: 'produtos',
        pathMatch: 'full'
      },
      {
        path: 'produtos', // Rota /admin/produtos
        component: GerenciarProdutos
      }
      
    ]
  }
];