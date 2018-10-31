import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { EndPipe } from './list/end.pipe'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ListComponent,
    ListItemComponent,
    EndPipe
  ],
  imports: [
    BrowserModule,
	FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
