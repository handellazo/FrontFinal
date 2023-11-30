import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaemergenteComponent } from './ventanaemergente.component';

describe('VentanaemergenteComponent', () => {
  let component: VentanaemergenteComponent;
  let fixture: ComponentFixture<VentanaemergenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentanaemergenteComponent]
    });
    fixture = TestBed.createComponent(VentanaemergenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
