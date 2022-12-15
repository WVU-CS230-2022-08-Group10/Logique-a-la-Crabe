import { Component, OnInit } from '@angular/core';
import * as internal from 'stream';
import { practice_questions } from './questions-answers-list';
import { quiz_questions } from './questions-answers-list';

@Component({
  selector: 'app-transistor-module',
  templateUrl: './transistor-module.component.html',
  styleUrls: ['./transistor-module.component.css']
})
export class TransistorModuleComponent implements OnInit {
  showPractice: boolean;
  showQuiz: boolean;
  currentQuestion: number;
  correctAnswer: number;
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
    this.showQuiz = false;
    this.setFirstQuestion();
  }

  // Displays the quiz questions after the button is clicked
  showQuizProblems() {
    this.showPractice = false;
    this.showQuiz = true;
    this.setFirstQuizQuestion();
    this.correctAnswer = this.getRandomInt(3);
  }

  // Changes the displayed question to the next one if the answer is correct
  changePracticeQuestion(clicked: string) {
    // If the selected answer is correct...
    if (this.correctAnswer == parseInt(clicked) && !this.finishedPractice) {
      this.showCorrect();
      //Update the question element to the next question
      var questionToChange = document.getElementById("question");
      if (questionToChange != null && this.currentQuestion <= 5)
        questionToChange.innerHTML = practice_questions[this.currentQuestion].question;

      // Randomly select the next button to be correct
      this.correctAnswer = this.getRandomInt(4);
      var correctButtonToChange = document.getElementById(this.correctAnswer.toString());

      // For loop that changes each button that's not the generated random number to each of the wrong answers in the list
      var i: number;
      var wrongAnswers = 0;
      for(i=1; i<5; i++){
        if(i!=this.correctAnswer){
          var wrongButtons = document.getElementById(i.toString())
          if(wrongButtons !=null){
            if(wrongAnswers == 0)
              wrongButtons.innerHTML = practice_questions[this.currentQuestion].wrong_answer1
            if(wrongAnswers == 1)
              wrongButtons.innerHTML = practice_questions[this.currentQuestion].wrong_answer2
            if(wrongAnswers == 2)
              wrongButtons.innerHTML = practice_questions[this.currentQuestion].wrong_answer3
          wrongAnswers++;
          }
        }// End of outside if statement
      }// End of for loop

      // Changes the correct answer button to the provided correct answer
      if(correctButtonToChange != null)
      correctButtonToChange.innerHTML = practice_questions[this.currentQuestion].correct_answer;

      // Updates the current question to the next one
      this.currentQuestion = this.currentQuestion + 1;

      // Checks if the question is greater than the number of questions in the list
      if (this.currentQuestion == 6){
        this.finishedPractice = true;
        this.currentQuestion = 1;
      }
    }
    // Shows the incorrect answer popup
    else if (!this.finishedPractice) {
      this.showIncorrect();
    }

  }

  // Changes the displayed question to the next one if the answer is correct, exact same code as the changePracticeQuestion method
  // except accesses the quiz question list
  changeQuizQuestion(clicked: string) {
    if (this.correctAnswer == parseInt(clicked) && !this.finishedQuiz) {
      this.showCorrect();
      var questionToChange = document.getElementById("question");
      if (questionToChange != null  && this.currentQuestion < 5)
        questionToChange.innerHTML = quiz_questions[this.currentQuestion].question;
      this.correctAnswer = this.getRandomInt(4);

      var correctButtonToChange = document.getElementById(this.correctAnswer.toString());
      var i: number;
      var wrongAnswers = 0;
      for(i=1; i<5; i++){
        if(i!=this.correctAnswer){
          var wrongButtons = document.getElementById(i.toString())
          if(wrongButtons !=null){
            if(wrongAnswers == 0)
              wrongButtons.innerHTML = quiz_questions[this.currentQuestion].wrong_answer1
            if(wrongAnswers == 1)
              wrongButtons.innerHTML = quiz_questions[this.currentQuestion].wrong_answer2
            if(wrongAnswers == 2)
              wrongButtons.innerHTML = quiz_questions[this.currentQuestion].wrong_answer3
          wrongAnswers++;
          }
        }// End of outside if statement
      }// End of for loop
      if(correctButtonToChange != null)
      correctButtonToChange.innerHTML = quiz_questions[this.currentQuestion].correct_answer;

      this.currentQuestion = this.currentQuestion + 1;


      if (this.currentQuestion == 6)
        this.finishedQuiz = true;
    }
    else if (!this.finishedQuiz) {
      this.showIncorrect();
    }

  }

// Required because of loading delays, shows the first question when the practice questions button is clicked
  async setFirstQuestion(){
    // Waits 20 miliseconds for the elements to load
    await this.sleep(20);

    // Gets the element of id "question" and changes it to the first question in the list
    var question = document.getElementById("question");
    if(question!=null)
    question.innerHTML = practice_questions[0].question;

    // Gets the button with the id of the randomly generated correct answer
    var correctButtonToChange = document.getElementById(this.correctAnswer.toString());

    // For loop that changes each button that's not the generated random number to each of the wrong answers in the list
    var i: number;
    var wrongAnswers = 0;
    for(i=1; i<5; i++){
      if(i!=this.correctAnswer){
        var wrongButtons = document.getElementById(i.toString())
        if(wrongButtons !=null){
          if(wrongAnswers == 0)
            wrongButtons.innerHTML = practice_questions[0].wrong_answer1
          if(wrongAnswers == 1)
            wrongButtons.innerHTML = practice_questions[0].wrong_answer2
          if(wrongAnswers == 2)
            wrongButtons.innerHTML = practice_questions[0].wrong_answer3
        wrongAnswers++;
        }
      }// End of outside if statement
    }// End of for loop

    // Sets the text of the correct answer button to the correct answer
    if(correctButtonToChange != null)
    correctButtonToChange.innerHTML = practice_questions[0].correct_answer;
  }

  // Required because of loading delays, shows the first question when the practice questions button is clicked,
  // works the exact same way as the showPracticeQuestions method but uses the quiz question list instead
  async setFirstQuizQuestion(){
    await this.sleep(20);
    var question = document.getElementById("question");
    if(question!=null)
    question.innerHTML = quiz_questions[0].question;

    var correctButtonToChange = document.getElementById(this.correctAnswer.toString());
    var i: number;
    var wrongAnswers = 0;
    for(i=1; i<5; i++){
      if(i!=this.correctAnswer){
        var wrongButtons = document.getElementById(i.toString())
        if(wrongButtons !=null){
          if(wrongAnswers == 0)
            wrongButtons.innerHTML = quiz_questions[0].wrong_answer1
          if(wrongAnswers == 1)
            wrongButtons.innerHTML = quiz_questions[0].wrong_answer2
          if(wrongAnswers == 2)
            wrongButtons.innerHTML = quiz_questions[0].wrong_answer3
        wrongAnswers++;
        }
      }// End of outside if statement
    }// End of for loop
    if(correctButtonToChange != null)
    correctButtonToChange.innerHTML = quiz_questions[0].correct_answer;
  }

  // Used for randomly generating correct answers
  getRandomInt(max: number) {
    return Math.floor(Math.random() * max) + 1;
  }

  // Shows the incorrect answer popup and then takes it away after 2 seconds
  async showIncorrect() {
    this.isCorrect = false;
    this.isIncorrect = true;
    await this.sleep(2000);
    this.isIncorrect = false;
  }

  // Shows the correct answer popup and then takes it away after 2 seconds
  async showCorrect() {
    this.isIncorrect = false;
    this.isCorrect = true;
    await this.sleep(2000);
    this.isCorrect = false;
  }

}
