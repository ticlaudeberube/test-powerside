import { Component, Input } from '@angular/core';
import { Inscription } from '../types';

@Component({
  selector: 'app-liste-inscriptions',
  templateUrl: './liste-inscriptions.component.html',
  styleUrls: ['./liste-inscriptions.component.css']
})
export class ListeInscriptionsComponent {
  @Input() inscriptions: Array<Inscription>;
}
