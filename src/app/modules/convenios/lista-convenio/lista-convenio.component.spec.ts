import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaConvenioComponent } from './lista-convenio.component';

describe('ListaConvenioComponent', () => {
  let component: ListaConvenioComponent;
  let fixture: ComponentFixture<ListaConvenioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaConvenioComponent]
    });
    fixture = TestBed.createComponent(ListaConvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
