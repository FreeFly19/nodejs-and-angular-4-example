import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule}   from '@angular/router';

import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './users/user/user.component';

const routes = [
  {path: 'users', component: UsersComponent},
  {path: 'users/:userId', component: UserComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


