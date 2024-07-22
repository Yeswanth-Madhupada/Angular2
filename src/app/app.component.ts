import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS
  title = 'my-first-app';
  selectedUserId?: string;
  get selectedUser() {
    return this.users.find((users) => users.id === this.selectedUserId);
  }
  onSelectUser(id: string) {
    this.selectedUserId = id
  }
}
