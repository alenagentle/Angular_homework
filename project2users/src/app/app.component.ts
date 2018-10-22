import { Component } from '@angular/core';
import {ListItemComponent} from './list-item/list-item.component';
import {User} from './shared/user.model';



const LOCAL_STORAGE_KEY = 'users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2users';
  currentUser: User = null;
  users: User[];

  constructor() {
    this.users = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    this.currentUser = this.getCurrentUser();
  }

  addUser() {
    this.users.push(this.currentUser);
    this.currentUser = this.getCurrentUser();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.users));
  }
  
  getCurrentUser() {
    return new User(this.users.length, '', '', '');
  }
  
  deleteUser(user){
	console.log('app.component delete:');
	console.log(user);
  }
}
