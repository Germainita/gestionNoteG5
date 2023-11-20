import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-notes',
  templateUrl: './gestion-notes.component.html',
  styleUrls: ['./gestion-notes.component.css']
})
export class GestionNotesComponent {

  selectedApprenant: any;
  notes: string = '';
  apprenants: any[] = [{ id: 1, nom: 'FALL', prenom: 'PATHE', notes: '' },
  { id: 2, nom: 'DIOKH', prenom: 'SAMBA', notes: '' },
  { id: 3, nom: 'SENE', prenom: 'SIDY', notes: '' },
  { id: 4, nom: 'FAYE', prenom: 'AMY', notes: '' },
  { id: 5, nom: 'SAMBOU', prenom: 'REMY', notes: '' },
  { id: 6, nom: 'SAGNA', prenom: 'RAMA', notes: '' },
  { id: 7, nom: 'DOSSO YOVO', prenom: 'BINTA', notes: '' },
  { id: 8, nom: 'MAMBULY', prenom: 'MINTOU', notes: '' },] ;


  matiere: string = '';
  idProf: string = '';

  // enregistrerNote() {
  //   const toutesLesNotesSontRemplies = this.sontToutesLesNotesRemplies();

  //   // Vous pouvez ajouter la logique ici pour enregistrer les notes
  //   console.log('Notes enregistrées : ', this.apprenants);
  //   localStorage.setItem('apprenants', JSON.stringify(this.apprenants));
  // }

  modifierNote(apprenant: any) {
    // Définir l'apprenant sélectionné pour la modification
    this.selectedApprenant = apprenant;
  }

  enregistrerModification() {
    // Sauvegarder la note modifiée
    console.log('Note modifiée par le professeur avec l\'ID : ', this.idProf);

    console.log('Note modifiée : ', this.selectedApprenant);
    // Ajoutez votre logique pour enregistrer la note modifiée

    // Trouver l'index de l'apprenant sélectionné dans le tableau
    const index = this.apprenants.findIndex(apprenant => apprenant.id === this.selectedApprenant.id);

    if (index !== -1) {
      // Mettre à jour l'apprenant dans le tableau
      this.apprenants[index] = this.selectedApprenant;
      console.log('Tableau après la modification : ', this.apprenants);

      // Mettre à jour localStorage avec le tableau modifié
      localStorage.setItem('apprenants', JSON.stringify(this.apprenants));
      console.log('Données enregistrées dans localStorage : ', this.apprenants);
    }

    this.selectedApprenant = null; // Réinitialiser l'apprenant sélectionné après la modification
  }
}
