import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarrolComponent } from './asignarrol.component';

describe('AsignarrolComponent', () => {
  let component: AsignarrolComponent;
  let fixture: ComponentFixture<AsignarrolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignarrolComponent]
    });
    fixture = TestBed.createComponent(AsignarrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
