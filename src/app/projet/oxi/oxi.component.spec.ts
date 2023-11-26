import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OXIComponent } from './oxi.component';

describe('OXIComponent', () => {
  let component: OXIComponent;
  let fixture: ComponentFixture<OXIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OXIComponent]
    });
    fixture = TestBed.createComponent(OXIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
