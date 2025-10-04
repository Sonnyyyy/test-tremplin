import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisponibilitesPourUneVisiteComponent } from './disponibilites-pour-une-visite.component';

describe('DisponibilitesPourUneVisiteComponent', () => {
  let component: DisponibilitesPourUneVisiteComponent;
  let fixture: ComponentFixture<DisponibilitesPourUneVisiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisponibilitesPourUneVisiteComponent]
    });
    fixture = TestBed.createComponent(DisponibilitesPourUneVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
