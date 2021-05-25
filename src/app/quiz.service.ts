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

  getPersonalityQuiz(url: string) {
    console.log(`assets/quizzes/personality_quizzes/${url}.json`);
    return from(this.http.get(`assets/quizzes/personality_quizzes/${url}.json`).toPromise());
  }

  getMathQuiz(url: string) {
    return from(this.http.get(`assets/quizzes/math_quizzes/${url}.json`).toPromise());
  }

  getReadingQuiz(url: string) {
    return from(this.http.get(`assets/quizzes/reading_quizzes/${url}.json`).toPromise());
  }

  //create one method for math and one method for reading
  getAllPersonalityQuizNames() {
    return[
      {name: 'Greatness Assessment', description: 'Take the greatness assessment to unlock your potential', id: 'assessment'},
      // {name: 'Quiz 1', description: 'This is the first quiz', id: 'quiz1'},
      // {name: 'Quiz 2', description: 'This is the second quiz', id: 'quiz2'}
    ];
  }

  getAllMathQuizNames() {
    return[
      {name: 'Math Grade 2', description: '', id: 'Grade4'},
      {name: 'Math Grade 3', description: '', id: 'Grade5'},
      {name: 'Math Grade 4', description: '', id: 'Grade6'},
      {name: 'Math Grade 5', description: '', id: 'Grade7'},
      {name: 'Math Grade 6', description: '', id: 'Grade8'},
      {name: 'Math Grade 7', description: '', id: 'Grade9'},
      {name: 'Pre Algebra', description: '', id: 'Grade10'},
      {name: 'Algebra', description: '', id: 'Grade11'},
      {name: 'Geometry and Trigonometry', description: '', id: 'Grade12'},
      {name: 'Algebra II', description: '', id: 'GradeAP'}
    ];
  }

  getAllReadingQuizNames() {
    return[
      {name: 'Reading Grade 4', description: '', id: 'Grade4'},
      {name: 'Reading Grade 5', description: '', id: 'Grade5'},
      {name: 'Reading Grade 6', description: '', id: 'Grade6'},
      {name: 'Reading Grade 7', description: '', id: 'Grade7'},
      {name: 'Reading Grade 8', description: '', id: 'Grade8'},
      {name: 'Reading Grade 9', description: '', id: 'Grade9'},
      {name: 'Reading Grade 10', description: '', id: 'Grade10'},
      {name: 'Reading Grade 11', description: '', id: 'Grade11'},
      {name: 'Reading Grade 12', description: '', id: 'Grade12'}
      // {name: 'Reading Grade AP', description: '', id: 'GradeAP'}
    ];
  }

  //create one method for math and one method for reading
  getAllPersonalityQuizes() {
    return[
      // {quiz: '1', url: 'assets/quiz/quiz1.json'},
      // {quiz: '2', url: 'assets/quiz/quiz2.json'},
      {quiz: 'firstAssessment', url: 'assets/quiz/firstAssessment.json'}
    ];
  }


  getAllMathQuizes() {
    return[
      {quiz: 'Grade4', url: 'assets/quizzes/math_quizzes/Grade4.json'},
      {quiz: 'Grade5', url: 'assets/quizzes/math_quizzes/Grade5.json'},
      {quiz: 'Grade6', url: 'assets/quizzes/math_quizzes/Grade6.json'},
      {quiz: 'Grade7', url: 'assets/quizzes/math_quizzes/Grade7.json'},
      {quiz: 'Grade8', url: 'assets/quizzes/math_quizzes/Grade8.json'},
      {quiz: 'Grade9', url: 'assets/quizzes/math_quizzes/Grade9.json'},
      {quiz: 'Grade10', url: 'assets/quizzes/math_quizzes/Grade10.json'},
      {quiz: 'Grade11', url: 'assets/quizzes/math_quizzes/Grade11.json'},
      {quiz: 'Grade12', url: 'assets/quizzes/math_quizzes/Grade12.json'},
      {quiz: 'GradeAP', url: 'assets/quizzes/math_quizzes/GradeAP.json'}
    ];
  }

  getAllReadingQuizes() {
    return[
      {quiz: 'Grade4', url: 'assets/quizzes/reading_quizzes/Grade4.json'},
      {quiz: 'Grade5', url: 'assets/quizzes/reading_quizzes/Grade5.json'},
      {quiz: 'Grade6', url: 'assets/quizzes/reading_quizzes/Grade6.json'},
      {quiz: 'Grade7', url: 'assets/quizzes/reading_quizzes/Grade7.json'},
      {quiz: 'Grade8', url: 'assets/quizzes/reading_quizzes/Grade8.json'},
      {quiz: 'Grade9', url: 'assets/quizzes/reading_quizzes/Grade9.json'},
      {quiz: 'Grade10', url: 'assets/quizzes/reading_quizzes/Grade10.json'},
      {quiz: 'Grade11', url: 'assets/quizzes/reading_quizzes/Grade11.json'},
      {quiz: 'Grade12', url: 'assets/quizzes/reading_quizzes/Grade12.json'}
      // {quiz: 'GradeAP', url: 'assets/quizzes/reading_quizzes/GradeAP.json'}
    ];

    
  }
  changeAssesmentStatus(status: boolean){
    this.assesmentSrc.next(status);
  }
}
