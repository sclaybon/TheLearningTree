import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirebaseAuthService } from '../firebase-auth.service';


@Component({
  selector: 'app-avatar-modal',
  templateUrl: './avatar-modal.page.html',
  styleUrls: ['./avatar-modal.page.scss'],
})
export class AvatarModalPage implements OnInit {

  image: string;
  avatarSelection: string;

  constructor(private authService: FirebaseAuthService, public modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }


  onClick(event, selection) {

    this.image = `assets/avatars/${selection}.png`;
    this.avatarSelection = this.image;

    this.authService.setProfileData(this.avatarSelection);

  }
  

}
