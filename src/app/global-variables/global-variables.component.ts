import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-variables',
  templateUrl: './global-variables.component.html',
  styleUrls: ['./global-variables.component.scss'],
})
export class GlobalVariablesComponent implements OnInit {

  previousUrl: String;
  currentUrl: String;

  constructor() { }

  ngOnInit() {}

  public setPreviousUrl(prevUrl){

    this.previousUrl = prevUrl;

  }

  public getPreviousUrl(){

      return this.previousUrl;

  }
  public setCurrentUrl(prevUrl){

    this.currentUrl = prevUrl;

  }

  public getCurrentUrl(){

      return this.currentUrl;

  }



}
