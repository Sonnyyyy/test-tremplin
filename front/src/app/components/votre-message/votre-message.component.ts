import { Component } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-votre-message',
  templateUrl: './votre-message.component.html',
  styleUrls: ['./votre-message.component.css']
})
export class VotreMessageComponent {

  constructor(
    public form: FormService
  ) {}
}
