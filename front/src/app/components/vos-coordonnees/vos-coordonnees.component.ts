import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-vos-coordonnees',
  templateUrl: './vos-coordonnees.component.html',
  styleUrls: ['./vos-coordonnees.component.css']
})
export class VosCoordonneesComponent {

  @Input() coordonnees = {} as NgForm

  constructor(
    public form: FormService
  ) {}
}
