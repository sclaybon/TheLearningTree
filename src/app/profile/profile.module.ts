import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageResolver } from './profile.resolver';

import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

import {ReadingQuizComponent} from './reading-quiz/reading-quiz.component';
import {MathQuizComponent} from './math-quiz/math-quiz.component';
import {PersonalityQuizComponent} from './personality-quiz/personality-quiz.component';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['sign-in']);

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    resolve: {
      data: ProfilePageResolver
    },
    children:[
			{
        path: 'reading-quiz', component: ReadingQuizComponent
      },
      {
        path: 'math-quiz', component: MathQuizComponent
      },
      {
        path: 'personality-quiz', component: PersonalityQuizComponent
      }
      
    ]
  },
  
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ProfilePage],
  providers: [ProfilePageResolver]
})
export class ProfilePageModule {}
