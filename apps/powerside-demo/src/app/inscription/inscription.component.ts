import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Inscription } from '../types';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})

export class InscriptionComponent implements OnInit {
  formulaire: FormGroup;
  statuts = ['présent', 'absent', 'peut-être'];
  titre = ['M.', 'Mme'];
  inscriptonDefault = {
    titre: null,
    nom: null,
    prenom: null,
    statut: this.statuts[0]
  };

  constructor(private readonly fb: FormBuilder) {}

  @Output() readonly inscription: EventEmitter<Inscription> = new EventEmitter();

  ngOnInit(): void {
    this.formulaire = this.fb.group({
      titre: [null, Validators.required],
      nom: [null, Validators.required],
      prenom: [null, Validators.required],
      statut: [this.statuts[0]],
    });
  }

  soumettre(): void {
    const inscrit = this.formulaire.value;
    this.formulaire.reset(this.inscriptonDefault);
    this.inscription.emit(inscrit);
  }
}
