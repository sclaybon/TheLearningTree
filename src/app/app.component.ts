import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { GlobalVariablesComponent} from './global-variables/global-variables.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {

  closed$ = new Subject<any>();
  showTabs = false; // <-- show tabs by default
  currentUrl: String;
  previousUrl: String;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _router: Router,
    private globalVariables: GlobalVariablesComponent

  ) {

    this.initializeApp();

  }

  ngOnInit(){

    this._router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      takeUntil(this.closed$)
    ).subscribe(event => {

      this.previousUrl = this.currentUrl;
      this.currentUrl = event['url'];

      this.globalVariables.setPreviousUrl(this.previousUrl);
      this.globalVariables.setCurrentUrl(this.currentUrl);


      console.log("previous url: " + this.globalVariables.getPreviousUrl());

      if (event['url'] === '/onboarding') {
        this.showTabs = false;
      } else if (event['url'] === '/') {
        this.showTabs = false;
      } else if (event['url'] === '/sign-in') {
        this.showTabs = false;
      } else if (event['url'] === '/sign-up') {
        this.showTabs = false;
      } else if (event['url'] === '/profile') {
        this.showTabs = true;
      } else if (event['url'] === '/profile/reading-quiz') {
        this.showTabs = true;
      } else if (event['url'] === '/profile/math-quiz') {
        this.showTabs = true;
      } else if (event['url'] === '/profile/personality-quiz') {
        this.showTabs = true;
      } else if (event['url'] === '/quiz') {
        this.showTabs = true;
      } 

    });


  }

  ngOnDestroy() {
    this.closed$.next(); // <-- close subscription when component is destroyed
  }

  initializeApp() {

  
    this.platform.ready().then(() => {     
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
