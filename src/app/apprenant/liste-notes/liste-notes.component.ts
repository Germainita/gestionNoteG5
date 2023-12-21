import { Apprenant,Classe,Evaluation,Professeur,Matiere } from 'src/app/models/models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './liste-note.service';
// import { find } from 'rxjs';

@Component({
  selector: 'app-liste-notes',
  templateUrl: './liste-notes.component.html',
  styleUrls: ['./liste-notes.component.css']
})
export class ListeNotesComponent implements OnInit {

  idApprenant: number = 0;
  notesApprenant: any[] = [];
  tabApprenants: any;
  // tabMatieres: any;

  notes: any []=[];

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit() {
    this.tabApprenants = JSON.parse(localStorage.getItem("apprenants") || "[]");

    this.idApprenant = +this.route.snapshot.params['id'];
    this.notesApprenant = this.dataService.getNotesByIdApprenant(this.idApprenant);

    console.log(this.idApprenant);
    console.log(this.tabApprenants);

     this.notes = JSON.parse(localStorage.getItem("note") || "[]");

    this.notesApprenant = this.notes.filter((notes:any) => notes.idApprenant === this.idApprenant);
    // console.log(this.notes);

    this.detailsEvaluation({ idEvaluation: 'notes' });
    this.noteApprenantFound(this.notes);

  }



      numEvaluation: any;
      semestre: any;
      anneScolaire: any;
      typeEvaluation: any;
      etatEvaluation: any;
      classeEvalue: any;
      // classeEvalue: any;
      tabClasses: any;
      listeApprenantsEvalues: any;



  detailsNoteApprenant(classe:any){
    this.classeEvalue = classe;
    console.log(this.classeEvalue);
    let classeEvalueFound = this.tabClasses.find((element:any) => element.nomClasse == this.classeEvalue);
    console.log(classeEvalueFound);
    this.listeApprenantsEvalues = classeEvalueFound.apprenants;

  }


    // Détails évaluation du prof
    detailsEvaluation(evaluation:any){
      this.numEvaluation = evaluation.idEvaluation;
      this.semestre = evaluation.semestre;
      this.anneScolaire = evaluation.anneeScolaire;
      this.typeEvaluation = evaluation.type;
      this.etatEvaluation = evaluation.etat;
    //  this.notes = JSON.parse(localStorage.getItem("note") || "[]");
    this.noteApprenantFound(evaluation.idEvaluation);
      console.log(evaluation)
    }

  noteApprenant: any;
  idAppFound: any;

  noteApprenantFound(idEvaluation: any){
    console.log(this.notes);
    console.log(idEvaluation);
    let noteFound = this.notes.find((element: any) => element.idEvaluation === idEvaluation);
    console.log(noteFound);
    // this.noteApprenant = noteFound.idEvaluation;
    if (noteFound) {
      this.noteApprenant = noteFound.note;
    } else {
      console.error('Note non trouvée pour l\'évaluation spécifiée.');
    }



  }
}




