import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Hero } from './components/hero/hero';
import { Menu } from './components/menu/menu';
import { Teminages } from './components/teminages/teminages';
import { Horaires } from './components/horaires/horaires';
import { Footer } from './components/footer/footer';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header,Hero, Menu, Teminages, Horaires, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Calao-Dore');
}
