import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileModel } from './profile.model';
import { FirebaseAuthService } from '../firebase-auth.service';
import { ModalController } from '@ionic/angular';
import { AvatarModalPage } from '../avatar-modal/avatar-modal.page';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  providers: [QuizService]
})
export class ProfilePage implements OnInit {
  user: ProfileModel; 
  quizList = [];
  assessmentComplete: boolean;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: FirebaseAuthService,
    private quizService: QuizService,
    public modalController: ModalController
  ) { }

  ngOnInit() {


    this.route.data.subscribe((result) => {

      this.user = result['data'];
      
    }, (err) => {})


    
    // //set the user image in firebase for future reference
    

    // this.user.image = this.user.image;

    // if(this.router.getCurrentNavigation().extras){
    //   this.user.image = this.router.getCurrentNavigation().extras.state.avatar;
    // }
    
    // this.quizService.currentAssesmentStatus.subscribe(status => 
    //   this.assessmentComplete = status
    // );
    // this.quizList = this.quizService.getAllPersonalityQuizNames(); 
   }

  //  ionViewWillEnter(){

  //   this.route.data.subscribe((result) => {

  //     this.user = result['data'];

      
  //   }, (err) => {})


  //  }

  async openModal() {
    const modal = await this.modalController.create({
    component: AvatarModalPage
    });

    modal.onDidDismiss().then(data=>{
      console.log("hi there guys");
      this.user = this.authService.getProfileData();
    })

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
