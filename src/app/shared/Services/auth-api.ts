import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthApi {
  readonly #isAuthenticated = signal(false);
  readonly isLoggedIn = this.#isAuthenticated.asReadonly();

  // Toutes les modifs sur #isAuthenticated
}
