import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatCardModule } from '@angular/material/card';
// import { MatButtonModule } from '@angular/material/button';
// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { TestWithoutStandaloneComponent } from './components/test-without-standalone/test-without-standalone.component';
import { DesignerComponent } from './designer/designer.component';


@NgModule({
  declarations: [	
      
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // MatCardModule,
    // MatButtonModule,
    // MatInputModule,
    // MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}