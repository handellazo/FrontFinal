import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarConvenioComponent } from './registrar-convenio.component';

describe('RegistrarConvenioComponent', () => {
  let component: RegistrarConvenioComponent;
  let fixture: ComponentFixture<RegistrarConvenioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarConvenioComponent]
    });
    fixture = TestBed.createComponent(RegistrarConvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
