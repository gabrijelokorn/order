import { CanvasComponent } from './canvas/canvas.component';
import { ProfileComponent } from './profile/profile.component';
import { AdministrationComponent } from './administration/administration.component';
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
  { path: 'administration', component: AdministrationComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'canvas', component: CanvasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
