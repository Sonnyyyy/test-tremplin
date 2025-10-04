import { Component } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-disponibilites-pour-une-visite',
  templateUrl: './disponibilites-pour-une-visite.component.html',
  styleUrls: ['./disponibilites-pour-une-visite.component.css']
})
export class DisponibilitesPourUneVisiteComponent {

  jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
  heures = [7, 8, 9, 10, 11, 14, 15, 16, 17];
  minutes = [0, 15, 30, 45];

  jourSelectionne = "Lundi";
  heureSelectionnee = 7;
  minuteSelectionnee = 0;

  constructor(
    public form: FormService
  ) {}

  ajouterDisponibilite() {
    this.form.disponibilites.push({
      jour: this.jourSelectionne,
      heure: this.heureSelectionnee,
      minute: this.minuteSelectionnee
    });
  }

  supprimerDisponibilite(index: number) {
    this.form.disponibilites.splice(index, 1);
  }
}
