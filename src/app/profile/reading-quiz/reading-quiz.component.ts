import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../quiz.service';


@Component({
  selector: 'app-reading-quiz',
  templateUrl: './reading-quiz.component.html',
  styleUrls: ['./reading-quiz.component.scss'],
})
export class ReadingQuizComponent implements OnInit {


  quizList = [];
  assessmentComplete: boolean;

  constructor(private quizService: QuizService,
    ) { }

  ngOnInit() {


    this.quizService.currentAssesmentStatus.subscribe(status => 
      this.assessmentComplete = status
    );
    
    this.quizList = this.quizService.getAllReadingQuizNames();
    console.log(this.quizList);

  }

}
