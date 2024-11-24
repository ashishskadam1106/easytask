import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo';

  users = DUMMY_USERS;

  selectUserId?: string;

  get selectUser() {
    return this.users.find((u) => u.id === this.selectUserId)?.name;
  }

  onSelectUser(id: string) {
    this.selectUserId = id;
  }
}
