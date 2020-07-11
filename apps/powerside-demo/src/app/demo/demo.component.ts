import { Component } from '@angular/core';
import { Inscription } from '../types';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styles: [`
    h1 {
      font-size: 1em
  }`]
})
export class DemoComponentComponent {
  inscriptions: Array<Inscription> = [];

  inscrire(inscription: Inscription): void {
    this.inscriptions = [...this.inscriptions, inscription];
  }
}
