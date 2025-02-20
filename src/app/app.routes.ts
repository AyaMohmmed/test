import { Routes } from '@angular/router';
import { HeaderComponent } from './components/Header/Header.component';
import { ThanksComponent } from './components/thanks/thanks.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { DashResultComponent } from './components/dash-result/dash-result.component';
import { AddComponent } from './components/Add/Add.component';
import { InterviewComponent } from './components/interview/interview.component';
import { AssessmentsComponent } from './components/Assessments/Assessments.component';
import { NewComponent } from './components/New/New.component';
import { InterKitComponent } from './components/inter-kit/inter-kit.component';
export const routes: Routes = 
[
{path:'header',component:HeaderComponent},
{path:'thanks',component:ThanksComponent},
{path:'dashbord',component:DashbordComponent},
{path:'dashResult',component:DashResultComponent},
{path:'add',component:AddComponent},
{path:'interview',component:InterviewComponent},
{path:'Assessments',component:AssessmentsComponent},
{path:'New',component:NewComponent},
{path:'',component:InterKitComponent},

];
