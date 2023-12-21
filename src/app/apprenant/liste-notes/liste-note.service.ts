
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // Méthode pour récupérer les notes d'un apprenant depuis le localStorage
  getNotesByIdApprenant(idApprenant: number) {
    const apprenants = JSON.parse(localStorage.getItem('apprenants') || '[]');
    const apprenant = apprenants.find((element: any) => element.id === idApprenant);

    return apprenant ? apprenant.notes : [];
  }
}
