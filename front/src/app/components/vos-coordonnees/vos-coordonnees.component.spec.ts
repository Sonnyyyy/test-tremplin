import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VosCoordonneesComponent } from './vos-coordonnees.component';

describe('VosCoordonneesComponent', () => {
  let component: VosCoordonneesComponent;
  let fixture: ComponentFixture<VosCoordonneesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VosCoordonneesComponent]
    });
    fixture = TestBed.createComponent(VosCoordonneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
