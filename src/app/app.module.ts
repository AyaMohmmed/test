import { ApplicationConfig, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/Header/Header.component';
import { ThanksComponent } from './components/thanks/thanks.component';
// import { TestComponent } from './components/Dashbord/test.component';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { InterKitComponent } from './components/inter-kit/inter-kit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [  
    
  ],
  imports: [
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    AppRoutingModule,
    BrowserModule,
    RouterModule

  ],
  bootstrap: [],

  providers: [],
})
export class AppModule { }
