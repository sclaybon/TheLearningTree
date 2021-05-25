import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../quiz.service';

@Component({
  selector: 'app-math-quiz',
  templateUrl: './math-quiz.component.html',
  styleUrls: ['./math-quiz.component.scss'],
})
export class MathQuizComponent implements OnInit {
  quizList = [];
  assessmentComplete: boolean;
  constructor(private quizService: QuizService) { }

  ngOnInit() {

    this.quizService.currentAssesmentStatus.subscribe(status => 
      this.assessmentComplete = status
    );
    
    this.quizList = this.quizService.getAllMathQuizNames();
    console.log(this.quizList);

  }

}
