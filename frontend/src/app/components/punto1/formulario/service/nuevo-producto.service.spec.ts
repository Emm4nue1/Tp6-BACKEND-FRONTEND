import { TestBed } from '@angular/core/testing';

import { NuevoProductoService } from './nuevo-producto.service';

describe('NuevoProductoService', () => {
  let service: NuevoProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuevoProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
