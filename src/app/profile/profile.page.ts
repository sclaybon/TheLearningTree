import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileModel } from './profile.model';
import { FirebaseAuthService } from '../firebase-auth.service';
import { ModalController } from '@ionic/angular';
import { AvatarModalPage } from '../avatar-modal/avatar-modal.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: ProfileModel;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: FirebaseAuthService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.route.data
    .subscribe((result) => {
      this.user = result['data'];
    }, (err) => {})
  }

  async openModal() {
    const modal = await this.modalController.create({
    component: AvatarModalPage
    });
    return await modal.present();
   }

  signOut() {
    this.authService.signOut().subscribe(() => {
      // Sign-out successful.
      this.router.navigate(['sign-in']);
    }, (error) => {
      console.log('signout error', error);
    });
  }
}
