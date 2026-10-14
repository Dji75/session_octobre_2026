import { Component, inject, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { userStore } from './shared/store/user-store';

@Component({
  imports: [
    FormField
  ],
  selector: 'app-user-management',
  styleUrl: './user-management.scss',
  templateUrl: './user-management.html',
  providers: [userStore],
})
export default class UserManagement {
  protected readonly user = signal({
    name: '',
  });
  protected readonly form = form(this.user);

  protected readonly userStore = inject(userStore);

  protected addUser() {
    this.userStore.add({ name: this.form().value().name, id: (10_000_000 * Math.random()) });
  }
}
