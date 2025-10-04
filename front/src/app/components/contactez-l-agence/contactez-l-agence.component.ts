import { Component } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-contactez-l-agence',
  templateUrl: './contactez-l-agence.component.html',
  styleUrls: ['./contactez-l-agence.component.css']
})
export class ContactezLAgenceComponent {

  constructor(
    public form: FormService
  ) {}
}
