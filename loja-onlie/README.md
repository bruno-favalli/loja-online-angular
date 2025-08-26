# Angular - Projeto de Loja

Este projeto é o front-end de uma loja online. A aplicação é uma Single-Page Application (SPA) totalmente funcional que permite aos usuários visualizar produtos, gerenciar um carrinho de compras e autenticar-se em uma área de administração.

Para simular um ambiente real, o projeto consome a API pública e gratuita **FakeStoreAPI**, que fornece todos os dados necessários de produtos, categorias e autenticação de usuários.

## ✨ Funcionalidades Principais

A aplicação implementa um fluxo completo de e-commerce, incluindo:

* **Vitrine de Produtos:**
    * Página inicial com produtos e categorias em destaque para guiar o usuário.
    * Página de catálogo com a listagem completa de todos os produtos.
    * Filtro de produtos por categoria.
* **Detalhes do Produto:**
    * Rota dinâmica (`/produto/:id`) para exibir informações detalhadas de um único produto.
    * Botão para adicionar o produto diretamente ao carrinho.
* **Carrinho de Compras:**
    * Gerenciamento de estado reativo: o carrinho é atualizado em tempo real em toda a aplicação.
    * Página dedicada para exibir os itens, quantidades e o valor total da compra.
    * Funcionalidade para remover itens e alterar quantidades.
* **Sistema de Autenticação:**
    * Página de login com formulário que realiza uma requisição `POST` para a API.
    * Armazenamento de token JWT no `localStorage` após um login bem-sucedido.
    * O estado de login (logado/deslogado) é refletido globalmente no cabeçalho.
* **Rotas Protegidas:**
    * A página do carrinho de compras e a área de administração só são acessíveis para usuários autenticados.
* **Módulo de Administração:**
    * Área de administração em `/admin`, carregada sob demanda (Lazy Loading) para otimização de performance.
    * Tabela com todos os produtos e a funcionalidade para deletar um item (simulando um CRUD).
* **Páginas Adicionais:**
    * Páginas "Sobre" e "Contato" com formulário validado para uma experiência de site mais completa.

## 🛠️ Tecnologias e Conceitos Aplicados

Este projeto foi construído utilizando as boas práticas e os principais recursos do ecossistema Angular:

* **Angular (Standalone Components):** Arquitetura moderna de componentes.
* **TypeScript:** Linguagem base para o desenvolvimento, garantindo um código mais seguro e legível.
* **Roteamento Avançado (`RouterModule`):**
    * Criação de rotas para todas as páginas da aplicação.
    * Uso de **Lazy Loading** para o módulo de administração.
    * Implementação de **Route Guards** (`CanActivate`) para proteger rotas.
* **Serviços e Injeção de Dependência:**
    * `Product` para a lógica de comunicação com os endpoints de produtos.
    * `Auth` para gerenciar login, logout e o estado de autenticação.
    * `Carrinho` para gerenciar o estado do carrinho de compras.
* **`HttpClient` e Comunicação com API:**
    * Uso de `HttpClient` para todas as requisições à FakeStoreAPI.
    * Implementação de `HttpInterceptor` para anexar automaticamente o token JWT.
    * Uso dos métodos `GET`, `POST` e `DELETE`.
* **RxJS (`Observables` e `BehaviorSubject`):**
    * Utilização de `Observables` para lidar com a natureza assíncrona das chamadas HTTP.
    * Gerenciamento de estado reativo com `BehaviorSubject`, garantindo que a UI reaja instantaneamente a qualquer mudança de dados.
* **Formulários (Template-Driven):**
    * Uso de `FormsModule` e `[(ngModel)]` para criar formulários interativos com validação em tempo real.

## 🏁 Como Rodar o Projeto Localmente

Siga os passos abaixo para executar a aplicação em seu ambiente de desenvolvimento.


### Passos

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git](https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git)
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd nome-da-pasta-do-projeto
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Execute o servidor de desenvolvimento:**
    ```bash
    ng serve
    ```

5.  **Acesse no navegador:**
    Abra seu navegador e acesse `http://localhost:4200/`.

### Credenciais para Teste
Para testar as funcionalidades de login e áreas protegidas, utilize as credenciais fornecidas pela FakeStoreAPI:

* **Usuário:** `mor_2314`
* **Senha:** `83r5^_`
