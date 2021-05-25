import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from '../firebase-auth.service';

@Component({
  selector: 'app-avatar-selection',
  templateUrl: './avatar-selection.page.html',
  styleUrls: ['./avatar-selection.page.scss'],
})
export class AvatarSelectionPage implements OnInit {
  
  avatarSelection: string;
  image: string;

  constructor(private authService: FirebaseAuthService) {}

  ngOnInit() {
  }

  onClick(event, selection) {

    this.image = `assets/avatars/${selection}.png`;
    this.avatarSelection = this.image;

    this.authService.setProfileData(this.avatarSelection);

  }

}
