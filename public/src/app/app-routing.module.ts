import { RegisterComponent } from './lobby/register/register.component';
import { LoginComponent } from './lobby/login/login.component';
import { LobbyComponent } from './lobby/lobby.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lobby', component: LobbyComponent, children:
      [
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
