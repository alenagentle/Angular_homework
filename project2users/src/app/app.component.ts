import { Component } from '@angular/core';
import {ListItemComponent} from './list-item/list-item.component';
import {ListComponent} from './list/list.component';
import {User} from './shared/user.model';
import {UserService} from './user.service';



const LOCAL_STORAGE_KEY = 'users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  title = 'project2users';
  currentUser: User = null;
  users: User[];

  constructor(private userService: UserService) {
      this.users = this.userService.getUsers();
      this.currentUser = this.userService.getCurrentUser();
  }

  addUser() {
      this.userService.addUser(this.currentUser);
      this.currentUser = this.userService.getCurrentUser();
      this.users = this.userService.getUsers();
  }

  deleteUser(event: User[]){
      this.userService.deleteUser(event);
      this.users = this.userService.getUsers();
	}
}
