import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/Header/Header.component';
import { ThanksComponent } from './components/thanks/thanks.component';
import { AddComponent } from './components/Add/Add.component';

const routes: Routes = [
  { path: 'contact-us', component: HeaderComponent },
  { path: 'thanks', component: ThanksComponent },
  {path:'add-interview', component: AddComponent},

  { path: '', redirectTo: '/home', pathMatch: 'full' } ,
  { path: '**', redirectTo: '/home'} 

];

@NgModule({

  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
