import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { FirebaseAuthService } from './firebase-auth.service';

import { AvatarModalPageModule } from './avatar-modal/avatar-modal.module';
import { QuizComponent } from './quiz/quiz.component';
import { ReadingQuizComponent } from './profile/reading-quiz/reading-quiz.component'
import { MathQuizComponent } from './profile/math-quiz/math-quiz.component'
import { PersonalityQuizComponent } from './profile/personality-quiz/personality-quiz.component'
import { GlobalVariablesComponent } from './global-variables/global-variables.component';

@NgModule({
  declarations: [AppComponent,
    QuizComponent,
    ReadingQuizComponent,
    MathQuizComponent,
    PersonalityQuizComponent,
    GlobalVariablesComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AvatarModalPageModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseAuthService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HttpClientModule,
    GlobalVariablesComponent,
    QuizComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule {

constructor(){

}





}
