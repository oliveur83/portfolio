import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChenilleComponent } from './chenille.component';

describe('ChenilleComponent', () => {
  let component: ChenilleComponent;
  let fixture: ComponentFixture<ChenilleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChenilleComponent]
    });
    fixture = TestBed.createComponent(ChenilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
