import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { LogoWindowsMicrosoft } from './logo-windows-microsoft/logo-windows-microsoft';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, LogoWindowsMicrosoft, NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SindaImanTP1');

  public backgroundColor: string = "white";

  public changeBackgroundColor(selectedColor: string) {
    this.backgroundColor = selectedColor;
  }

}
