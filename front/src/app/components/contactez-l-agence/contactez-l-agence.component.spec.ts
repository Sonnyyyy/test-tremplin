import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactezLAgenceComponent } from './contactez-l-agence.component';

describe('ContactezLAgenceComponent', () => {
  let component: ContactezLAgenceComponent;
  let fixture: ComponentFixture<ContactezLAgenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactezLAgenceComponent]
    });
    fixture = TestBed.createComponent(ContactezLAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
