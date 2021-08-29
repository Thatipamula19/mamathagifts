import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MaterialModule } from 'src/app/material.module';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';

@NgModule({
    declarations: [
    LoginComponent
  ],
    imports: [
      AngularFireAuthModule,MaterialModule
    ],
    providers: [LoginService],
    bootstrap: []
  })
  export class AppModuleAuth { }