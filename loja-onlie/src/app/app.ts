// SEU ARQUIVO app.ts (ou app.component.ts)
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './componentes/header/header'; 
import { Footer } from './componentes/footer/footer';

@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html', 
  styleUrls: ['./app.css']  
})
export class App {
  // ...
}