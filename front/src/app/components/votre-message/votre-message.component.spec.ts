import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotreMessageComponent } from './votre-message.component';

describe('VotreMessageComponent', () => {
  let component: VotreMessageComponent;
  let fixture: ComponentFixture<VotreMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotreMessageComponent]
    });
    fixture = TestBed.createComponent(VotreMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
