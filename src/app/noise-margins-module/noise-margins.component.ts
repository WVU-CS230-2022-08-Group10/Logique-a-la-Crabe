import { Component, OnInit } from '@angular/core';
import * as internal from 'stream';
import { noise_margins_practice_questions } from './noise-margins-list';
import { noise_margins_quiz_questions } from './noise-margins-list';

@Component({
  selector: 'app-noise-margins-module',
  templateUrl: './noise-margins.component.html',
  styleUrls: ['./noise-margins.component.css']
})
export class NoiseModuleComponent implements OnInit {
  showPractice: boolean;
  showQuiz: boolean;
  currentQuestion: number;
  correctAnswer: number;
  first: boolean;
  isIncorrect: boolean;
  isCorrect: boolean;
  finishedPractice: boolean;
  finishedQuiz: boolean;

  sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

  constructor() {
    this.showPractice = false;
    this.showQuiz = false;
    this.currentQuestion = 1;
    this.correctAnswer = this.getRandomInt(3);
    this.first = true;
    this.isIncorrect = false;
    this.isCorrect = false;
    this.finishedPractice = false;
    this.finishedQuiz = false;
  }

  ngOnInit(): void {
  }

  // Displays the practice questions after the button is clicked
  showPracticeProblems() {
    this.showPractice = true;
    this.setFirstQuestion();
  }

  // Displays the quiz questions after the button is clicked
  showQuizProblems() {
    this.showPractice = false;
    this.showQuiz = true;
    this.correctAnswer = this.getRandomInt(3);
  }

  // Changes the displayed question to the next one if the answer is correct
  changePracticeQuestion(clicked: string) {
    if (this.correctAnswer == parseInt(clicked) && !this.finishedPractice && !this.first) {
      this.showCorrect();
      var questionToChange = document.getElementById("question");
      if (questionToChange != null && this.currentQuestion < 5)
        questionToChange.innerHTML = noise_margins_practice_questions[this.currentQuestion].question;
      this.correctAnswer = this.getRandomInt(4);

      var correctButtonToChange = document.getElementById(this.correctAnswer.toString());
      var i: number;
      var wrongAnswers = 0;
      for(i=1; i<5; i++){
        if(i!=this.correctAnswer){
          var wrongButtons = document.getElementById(i.toString())
          if(wrongButtons !=null){
            if(wrongAnswers == 0)
              wrongButtons.innerHTML = noise_margins_practice_questions[this.currentQuestion].wrong_answer1
            if(wrongAnswers == 1)
              wrongButtons.innerHTML = noise_margins_practice_questions[this.currentQuestion].wrong_answer2
            if(wrongAnswers == 2)
              wrongButtons.innerHTML = noise_margins_practice_questions[this.currentQuestion].wrong_answer3
          wrongAnswers++;
          }
        }// End of outside if statement
      }// End of for loop
      if(correctButtonToChange != null)
      correctButtonToChange.innerHTML = noise_margins_practice_questions[this.currentQuestion].correct_answer;

      this.currentQuestion = this.currentQuestion + 1;

      if (this.currentQuestion == 6){
        this.finishedPractice = true;
        this.currentQuestion = 1;
      }
    }
    else if (!this.first && !this.finishedPractice) {
      this.showIncorrect();
    }
    this.first = false;

  }

  // Changes the displayed question to the next one if the answer is correct
  changeQuizQuestion(clicked: string) {
    if (this.correctAnswer == parseInt(clicked) && !this.finishedQuiz) {
      this.showCorrect();
      var questionToChange = document.getElementById("question");
      if (questionToChange != null  && this.currentQuestion < 5)
        questionToChange.innerHTML = noise_margins_quiz_questions[this.currentQuestion].question;
      this.currentQuestion = this.currentQuestion + 1;
      this.correctAnswer = this.getRandomInt(4);

      if (this.currentQuestion == 6)
        this.finishedQuiz = true;
    }
    else if (!this.first && !this.finishedQuiz) {
      this.showIncorrect();
    }
    this.first = false;
  }

// Required because of loading delays, shows the first question when the practice questions button is clicked
  async setFirstQuestion(){
    await this.sleep(20);
    var question = document.getElementById("question");
    if(question!=null)
    question.innerHTML = noise_margins_quiz_questions[0].question;

    var correctButtonToChange = document.getElementById(this.correctAnswer.toString());
    var i: number;
    var wrongAnswers = 0;
    for(i=1; i<5; i++){
      if(i!=this.correctAnswer){
        var wrongButtons = document.getElementById(i.toString())
        if(wrongButtons !=null){
          if(wrongAnswers == 0)
            wrongButtons.innerHTML = noise_margins_quiz_questions[0].wrong_answer1
          if(wrongAnswers == 1)
            wrongButtons.innerHTML = noise_margins_quiz_questions[0].wrong_answer2
          if(wrongAnswers == 2)
            wrongButtons.innerHTML = noise_margins_quiz_questions[0].wrong_answer3
        wrongAnswers++;
        }
      }// End of outside if statement
    }// End of for loop
    if(correctButtonToChange != null)
    correctButtonToChange.innerHTML = noise_margins_quiz_questions[0].correct_answer;

  }

  // Used for randomly generating correct answers
  getRandomInt(max: number) {
    return Math.floor(Math.random() * max) + 1;
  }

  async showIncorrect() {
    this.isCorrect = false;
    this.isIncorrect = true;
    await this.sleep(2000);
    this.isIncorrect = false;
  }
  async showCorrect() {
    this.isIncorrect = false;
    this.isCorrect = true;
    await this.sleep(2000);
    this.isCorrect = false;
  }

}
