import { Component, OnInit,Input, Output,EventEmitter} from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [NgClass],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit{
  @Input() color: string = "";
  @Output() text: EventEmitter<string> = new EventEmitter();

  prenom1: string = "Sinda";
  prenom2: string = "Iman";
  ngOnInit(): void {
    this.text.emit(this.prenom1 + " " + this.prenom2)
  }

}
