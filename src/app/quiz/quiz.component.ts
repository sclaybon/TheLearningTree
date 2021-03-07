import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileModel } from '../profile/profile.model';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  providers: [QuizService]
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

  constructor(
    private router: Router,
    private quizService: QuizService,
    private elem: ElementRef) {   }

  ngOnInit() {
    if(this.router.getCurrentNavigation().extras.state){
      this.quizToLoad = this.router.getCurrentNavigation().extras.state.quizName;
    }
    this.quizService.currentAssesmentStatus.subscribe(status => 
      this.assessmentComplete = status
    );
    this.getQuiz();
    this.getResults();
  }

  async getQuiz() {
    this.quizService.getQuiz(this.quizToLoad).subscribe(data => {
      this.quizData = data;
      this.isLoaded = true;
    });
  }

  async getResults() {
    this.quizService.getQuiz(`${this.quizToLoad}-answers`).subscribe(data => {
      this.quizAnswers = data;
    });
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
    this.score = ((this.numberCorrect/this.answers.length)*100).toFixed(2);
    this.assessmentComplete = true;
    this.quizService.changeAssesmentStatus(this.assessmentComplete);
  }

}
