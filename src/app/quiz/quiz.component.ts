import { Component, OnInit, ElementRef, HostListener, NgModule } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ProfileModel } from '../profile/profile.model';
import { QuizService } from '../quiz.service';
import { GlobalVariablesComponent } from '../global-variables/global-variables.component';

import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  providers: [QuizService]
})

@NgModule({
  declarations: [CommonModule
  ]
})


export class QuizComponent implements OnInit {

  user: ProfileModel;
  quizToLoad = "";
  quizData: any = {};
  quizAnswers: any;
  questionAnswer = "";
  answers: any = [];
  currentQuestion = 0;
  quizIsActive = true;
  numberCorrect = 0;
  numberWrong = 0;
  score: any;
  isLoaded = false;
  assessmentComplete: boolean;
  itemColor: string = "answer";
  previousUrl: String;
  passageExists = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private quizService: QuizService,
    private elem: ElementRef,
    private globalVariables: GlobalVariablesComponent) {   }

  
  ngOnInit() {


    //since there is a delay, I'll get the previous url using the current url
    this.previousUrl = this.globalVariables.getCurrentUrl();
    console.log("firstprev: " + this.previousUrl);
         
    // if(this.router.getCurrentNavigation().extras.state){
    //   this.quizToLoad = this.router.getCurrentNavigation().extras.state.quizName;
    // }

    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        console.log("inactivated");
        this.quizToLoad = this.router.getCurrentNavigation().extras.state.quizName;
        console.log("+++ " + this.quizToLoad);
      }
    });

    this.quizService.currentAssesmentStatus.subscribe(status => 
      this.assessmentComplete = status
    );

    this.getQuiz();
    this.getResults();

  }

  ionViewWillEnter(){


    this.quizData = {};
    this.questionAnswer = "";
    this.answers = [];
    this.currentQuestion = 0;
    this.numberCorrect = 0;
    this.numberWrong = 0;
    this.score = 0;
    this.isLoaded = false;
    this.assessmentComplete = false;
    this.itemColor = "answer";
    this.passageExists = false;


    this.previousUrl = this.globalVariables.getPreviousUrl();

    this.quizIsActive = true;

    console.log("gettinQuiz");
    console.log(this.quizToLoad);

    this.getQuiz();
    this.getResults();

  }


  
  async getQuiz() {

    console.log("firstprev: " + this.previousUrl);

    //check route (personality, math, or reading then call the correct method)
    console.log("active quiz" + this.quizIsActive);

    if(this.previousUrl == '/profile/reading-quiz'){
      console.log("reading: " + this.previousUrl);
      this.passageExists = true;

      this.quizService.getReadingQuiz(this.quizToLoad).subscribe(data => {
        this.quizData = data;
        this.isLoaded = true;
      });
    } else if(this.previousUrl == '/profile/math-quiz'){

      this.passageExists = false;

      console.log("math: " + this.previousUrl);

      this.quizService.getMathQuiz(this.quizToLoad).subscribe(data => {
        this.quizData = data;
        this.isLoaded = true;
      });
    } else if(this.previousUrl == '/profile/personality-quiz'){

      this.passageExists = false;

      console.log("personality: " + this.previousUrl);

      this.quizService.getPersonalityQuiz(this.quizToLoad).subscribe(data => {
        this.quizData = data;
        this.isLoaded = true;
      });
    }
   
  }

  async getResults() {

    //check route (personality, math, or reading then call the correct method)

    if(this.previousUrl == '/profile/reading-quiz'){
      this.quizService.getReadingQuiz(`${this.quizToLoad}-answers`).subscribe(data => {
        this.quizAnswers = data;
      });
    } else if(this.previousUrl == '/profile/math-quiz'){
      this.quizService.getMathQuiz(`${this.quizToLoad}-answers`).subscribe(data => {
        this.quizAnswers = data;
      });
    } else if(this.previousUrl == '/profile/personality-quiz'){
      this.quizService.getPersonalityQuiz(`${this.quizToLoad}-answers`).subscribe(data => {
        this.quizAnswers = data;
      });
    }
  
  }

  answerSelect(element, answer) {
    this.changeHighlightedAnswer();
    //highlight the selected answer
    element.srcElement.classList.replace('answer', 'answer-clicked');
    this.questionAnswer = answer;
  }

  nextButtonClick(element) {
    if(this.currentQuestion < this.quizData.questions.length-2) {
      this.answers.push(this.questionAnswer);
      this.questionAnswer = "";
      this.currentQuestion++;
    } else if(this.currentQuestion < this.quizData.questions.length-1) {
      this.answers.push(this.questionAnswer);
      this.questionAnswer = "";
      element.textContent = "Submit Quiz";
      this.currentQuestion++;
    } else {
      this.answers.push(this.questionAnswer);
      this.quizIsActive = false;
      this.showResults();
    }
    this.changeHighlightedAnswer();
  }

  changeHighlightedAnswer() {
    //change the highlighted answer back to the base color
    const elements = this.elem.nativeElement.querySelectorAll('.answer-clicked');
    if(elements.length>=1) {
      elements.forEach(ele => {
        ele.classList.replace('answer-clicked', 'answer');
      })
    }
  }

  showResults() {
    for(let i = 0; i < this.answers.length; i++) {
      if (this.answers[i] == this.quizAnswers.answers[i]) {
        this.numberCorrect++;
      } else {
        this.numberWrong++;
      }
    }

    // this.quizIsActive = true;
    this.score = ((this.numberCorrect/this.answers.length)*100).toFixed(2);
    this.assessmentComplete = true;
    this.quizService.changeAssesmentStatus(this.assessmentComplete);
  }

}
