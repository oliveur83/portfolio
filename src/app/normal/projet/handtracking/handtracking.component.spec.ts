import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandtrackingComponent } from './handtracking.component';

describe('HandtrackingComponent', () => {
  let component: HandtrackingComponent;
  let fixture: ComponentFixture<HandtrackingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HandtrackingComponent]
    });
    fixture = TestBed.createComponent(HandtrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
