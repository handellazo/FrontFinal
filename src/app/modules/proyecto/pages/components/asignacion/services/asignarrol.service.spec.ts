import { TestBed } from '@angular/core/testing';

import { AsignarrolService } from './asignarrol.service';

describe('AsignarrolService', () => {
  let service: AsignarrolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsignarrolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
