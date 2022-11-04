import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AppComponent } from './app.component';
import { LobbyComponent } from './lobby/lobby.component';
import { LoginComponent } from './lobby/login/login.component';
import { RegisterComponent } from './lobby/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdministrationComponent } from './administration/administration.component';
import { ProfileComponent } from './profile/profile.component';
import { CanvasComponent } from './canvas/canvas.component';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
    LoginComponent,
    RegisterComponent,
    AdministrationComponent,
    ProfileComponent,
    CanvasComponent,
    EditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
