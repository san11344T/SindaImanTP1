import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-logo-windows-microsoft',
  imports: [],
  templateUrl: './logo-windows-microsoft.html',
  styleUrl: './logo-windows-microsoft.css'
})
export class LogoWindowsMicrosoft {
  @Output() colorSelected: EventEmitter<string> = new EventEmitter();

  public selectColor(color: string) {
    this.colorSelected.emit(color);
  }
}
