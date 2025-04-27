import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { userTypeSelectionGuard } from './user-type-selection.guard';

describe('userTypeSelectionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => userTypeSelectionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
