import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  genre: "Mme" | "M" | undefined;
  nom = "";
  prenom = "";
  mail = "";
  telephone = "";

  demande: "visite" | "rappel" | "photos" | undefined;
  message = "";

  disponibilites: {
    jour: string;
    heure: number;
    minute: number;
  }[] = []

  constructor(
    private http: HttpClient
  ) {}

  envoyer(coordonnees: NgForm) {
    coordonnees.control.markAllAsTouched();
    if(coordonnees.valid) {
      this.http.post("localhost:3000/contact-client", {
        genre: this.genre,
        nom: this.nom,
        prenom: this.prenom,
        mail: this.mail,
        telephone: this.telephone,
        demande: this.demande,
        message: this.message,
        disponibilites: this.disponibilites
      }, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:4200'
        })
      }).subscribe();
    }
  }
}
