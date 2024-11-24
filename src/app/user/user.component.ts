import { Component, computed, input, output } from '@angular/core'; // computed, signal

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

type User = {
  id: string;
  avatar: string;
  name: string;
};

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath1 = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // @Input({required:true}) avatar!: string;
  // @Input() name!: string;
  // @Input({ required: true }) id!: string;

  // @Output() select = new EventEmitter();

  isUserSelected = input.required<boolean>();

  tt = false;

  select = output<string>();

  User = input.required<User>();
  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();

  imagePath = computed(() => 'assets/users/' + this.User().avatar);

  // get imagePath(){
  // return 'assets/users/' + this.avatar();
  // }

  clickMe() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    this.select.emit(this.User().id);
  }
}
