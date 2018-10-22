import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {User} from '../shared/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() user: User;
  @Output() userChange: EventEmitter<User> = new EventEmitter();
  
  addUser() {
    this.userChange.emit(this.user);
  }
}
