import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCampingComponent } from './gestion-camping.component';

describe('GestionCampingComponent', () => {
  let component: GestionCampingComponent;
  let fixture: ComponentFixture<GestionCampingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionCampingComponent]
    });
    fixture = TestBed.createComponent(GestionCampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
