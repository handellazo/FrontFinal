import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeEquipoComponent } from './informe-equipo.component';

describe('InformeEquipoComponent', () => {
  let component: InformeEquipoComponent;
  let fixture: ComponentFixture<InformeEquipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformeEquipoComponent]
    });
    fixture = TestBed.createComponent(InformeEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
