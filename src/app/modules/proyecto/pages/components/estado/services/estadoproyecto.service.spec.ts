import { TestBed } from '@angular/core/testing';

import { EstadoproyectoService } from './estadoproyecto.service';

describe('EstadoproyectoService', () => {
  let service: EstadoproyectoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoproyectoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
