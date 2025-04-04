import { CanActivateFn } from '@angular/router';

export const UserTypeSelectionGuard: CanActivateFn = (route, state) => {
  return true;
};
