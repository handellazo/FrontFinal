import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadolistarpyComponent } from './estadolistarpy.component';

describe('EstadolistarpyComponent', () => {
  let component: EstadolistarpyComponent;
  let fixture: ComponentFixture<EstadolistarpyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadolistarpyComponent]
    });
    fixture = TestBed.createComponent(EstadolistarpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
