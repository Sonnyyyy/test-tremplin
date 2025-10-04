import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VosCoordonneesComponent } from './components/vos-coordonnees/vos-coordonnees.component';
import { VotreMessageComponent } from './components/votre-message/votre-message.component';
import { DisponibilitesPourUneVisiteComponent } from './components/disponibilites-pour-une-visite/disponibilites-pour-une-visite.component';
import { ContactezLAgenceComponent } from './components/contactez-l-agence/contactez-l-agence.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VosCoordonneesComponent,
    VotreMessageComponent,
    DisponibilitesPourUneVisiteComponent,
    ContactezLAgenceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
