import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuDeDameComponent } from './jeu-de-dame.component';

describe('JeuDeDameComponent', () => {
  let component: JeuDeDameComponent;
  let fixture: ComponentFixture<JeuDeDameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JeuDeDameComponent]
    });
    fixture = TestBed.createComponent(JeuDeDameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
