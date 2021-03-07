import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  
  constructor(private http: HttpClient) { }

  isAssesmentComplete: boolean = true;
  private assesmentSrc = new BehaviorSubject(this.isAssesmentComplete);
  currentAssesmentStatus = this.assesmentSrc.asObservable();

  getQuiz(url: string) {
    return from(this.http.get(`assets/quizzes/${url}.json`).toPromise());
  }

  getAllQuizNames() {
    return[
      {name: 'Greatness Assessment', description: 'Take the greatness assessment to unlock your potential', id: 'assessment'},
      {name: 'Quiz 1', description: 'This is the first quiz', id: 'quiz1'},
      {name: 'Quiz 2', description: 'This is the second quiz', id: 'quiz2'}
    ];
  }

  getAllQuizes() {
    return[
      {quiz: '1', url: 'assets/quiz/quiz1.json'},
      {quiz: '2', url: 'assets/quiz/quiz2.json'},
      {quiz: 'firstAssessment', url: 'assets/quiz/firstAssessment.json'}
    ];
  }

  changeAssesmentStatus(status: boolean){
    this.assesmentSrc.next(status);
  }
}
