import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-notes',
  templateUrl: './liste-notes.component.html',
  styleUrls: ['./liste-notes.component.css']
})
export class ListeNotesComponent implements OnInit {

  apprenantConnecte: any; // Utilisation d'un type any pour simplifier, vous pouvez adapter selon vos besoins
  notes: string | null = null;
  matieres: string[] = []; // Remplacez le type par le type réel si nécessaire
  nom: { prof: string, prenom: string } = { prof: '', prenom: '' }; // Remplacez le type par le type réel si nécessaire
  // notes: number | null = null; // Remplacez le type par le type réel si nécessaire

  constructor() { }

  ngOnInit(): void {

    // Récupérez les données de l'étudiant depuis le stockage local
    const noteFromLocalStorage = localStorage.getItem('cléLocalStorage')
    const storedApprenant = localStorage.getItem('apprenantConnecte');
    this.apprenantConnecte = storedApprenant ? JSON.parse(storedApprenant) : null;

  }
}
