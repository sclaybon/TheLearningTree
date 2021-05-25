import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../quiz.service';

@Component({
  selector: 'app-personality-quiz',
  templateUrl: './personality-quiz.component.html',
  styleUrls: ['./personality-quiz.component.scss'],
})
export class PersonalityQuizComponent implements OnInit {

  quizList = [];
  assessmentComplete: boolean;

  constructor(private quizService: QuizService)
    { }

  ngOnInit() {

    this.quizService.currentAssesmentStatus.subscribe(status => 
      this.assessmentComplete = status
    );
    
    this.quizList = this.quizService.getAllPersonalityQuizNames();
    console.log(this.quizList);


  }

}
