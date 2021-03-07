import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar-selection',
  templateUrl: './avatar-selection.page.html',
  styleUrls: ['./avatar-selection.page.scss'],
})
export class AvatarSelectionPage implements OnInit {
  
  avatarSelection = "";

  constructor() {}

  ngOnInit() {
  }

  onClick(event, selection) {
    this.avatarSelection = `assets/avatars/${selection}.png`;
  }

}
