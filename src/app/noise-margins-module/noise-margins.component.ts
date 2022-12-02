import { Component, OnInit } from '@angular/core';
import * as internal from 'stream';
import { noise_margins_practice_questions } from './noise-margins-list';
import { noise_margins_quiz_questions } from './noise-margins-list';

@Component({
  selector: 'noise-margin-module',
  templateUrl: 'noise-margins.component.html',
  styleUrls: ['noise-margins.component.css']
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
    this.changePracticeQuestion("0");
    this.correctAnswer = this.getRandomInt(3);
    this.first = true;
    this.isIncorrect = false;
    this.isCorrect = false;
    this.finishedPractice = false;
    this.finishedQuiz = false;
  }

  ngOnInit(): void {
  }

  showPracticeProblems() {
    this.showPractice = true;
  }

  showQuizProblems() {
    this.showPractice = false;
    this.showQuiz = true;
    this.correctAnswer = this.getRandomInt(3);
  }

  changePracticeQuestion(clicked: string) {
    if (this.correctAnswer == parseInt(clicked) && !this.finishedPractice) {
      this.showCorrect();
      var tochange = document.getElementById("question");
      if (tochange != null && this.currentQuestion < 5)
        tochange.innerHTML = noise_margins_practice_questions[this.currentQuestion].question;
      this.currentQuestion = this.currentQuestion + 1;
      this.correctAnswer = this.getRandomInt(4);

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

  changeQuizQuestion(clicked: string) {
    if (this.correctAnswer == parseInt(clicked) && !this.finishedQuiz) {
      this.showCorrect();
      var tochange = document.getElementById("question");
      if (tochange != null  && this.currentQuestion < 5)
        tochange.innerHTML = noise_margins_quiz_questions[this.currentQuestion].question;
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
