import { Routes } from '@angular/router';

import { ProductList } from './componentes/product-list/product-list';
import { ProductDetail } from './componentes/product-detail/product-detail';
import { CartPage } from './componentes/cart-page/cart-page';
import { LoginPage } from './componentes/login-page/login-page';
import { authGuard } from './guards/auth.guard';
import { SobrePage } from './componentes/sobre-page/sobre-page';
import { ContatoPage } from './componentes/contato-page/contato-page';
import { HomePage } from './componentes/home-page/home-page';

export const routes: Routes = [
    {path: '', component: HomePage}, 
    {path: 'produtos', component: ProductList},
    {path: 'produto/:id', component: ProductDetail},
    //{path: 'carrinho', component: CartPage},
    {path: 'login', component: LoginPage},
    {
        path: 'carrinho',
        component: CartPage,
        canActivate: [authGuard] // Protege a rota do carrinho
    },
    {path: 'sobre', component: SobrePage},
    {path: 'contato', component: ContatoPage},
    {path: 'admin',
     loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES) }
];
