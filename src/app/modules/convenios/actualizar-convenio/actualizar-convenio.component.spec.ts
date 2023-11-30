import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarConvenioComponent } from './actualizar-convenio.component';

describe('ActualizarConvenioComponent', () => {
  let component: ActualizarConvenioComponent;
  let fixture: ComponentFixture<ActualizarConvenioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarConvenioComponent]
    });
    fixture = TestBed.createComponent(ActualizarConvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
