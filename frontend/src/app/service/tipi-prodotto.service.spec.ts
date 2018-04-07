import { TestBed, inject } from '@angular/core/testing';

import { TipiProdottoService } from './tipi-prodotto.service';

describe('TipiProdottoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipiProdottoService]
    });
  });

  it('should be created', inject([TipiProdottoService], (service: TipiProdottoService) => {
    expect(service).toBeTruthy();
  }));
});
