import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDTComponent } from './edt.component';

describe('EDTComponent', () => {
  let component: EDTComponent;
  let fixture: ComponentFixture<EDTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EDTComponent]
    });
    fixture = TestBed.createComponent(EDTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
