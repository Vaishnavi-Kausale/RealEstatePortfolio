import { CanActivateChildFn } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { inject } from '@angular/core';

export const authenticatedGuard: CanActivateChildFn = (childRoute, state) => {
  console.log('guard running')
  return inject(AuthenticationService).CanActivateChildFn();
};
