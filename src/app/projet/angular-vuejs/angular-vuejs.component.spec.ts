import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularVuejsComponent } from './angular-vuejs.component';

describe('AngularVuejsComponent', () => {
  let component: AngularVuejsComponent;
  let fixture: ComponentFixture<AngularVuejsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularVuejsComponent]
    });
    fixture = TestBed.createComponent(AngularVuejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
