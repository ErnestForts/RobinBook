import { TestBed } from '@angular/core/testing';

import { MapaServicioService } from './mapa-servicio.service';

describe('MapaServicioService', () => {
  let service: MapaServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapaServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
