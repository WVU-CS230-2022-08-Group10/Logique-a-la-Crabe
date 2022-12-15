import { Component, OnInit } from '@angular/core';
import * as internal from 'stream';
import { binary_practice_questions } from './binary-module-list';
import { binary_quiz_questions } from './binary-module-list';

@Component({
  selector: 'binary-module',
  templateUrl: 'binary-module.component.html',
  styleUrls: ['binary-module.component.css']
})

export class BinaryModuleComponent implements OnInit {
  showPractice: boolean;
  showQuiz: boolean;
  currentQuestion: number;
  correctAnswer: number;
  isIncorrect: boolean;
  isCorrect: boolean;
  finishedPractice: boolean;
  finishedQuiz: boolean;

  sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

  // Constructor
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

  /**
   *  showPractiveProblems() : void
   * 
   *  will display practice problems
   */
  showPracticeProblems() {
    this.showPractice = true;
    this.showQuiz = false;
    this.setFirstQuestion();
    this.currentQuestion = 1;
  }

  /**
   * showQuizProblems() : void
   * 
   * will display quiz problems
   */
  showQuizProblems() {
    this.showPractice = false;
    this.showQuiz = true;
    this.setFirstQuizQuestion();
    this.correctAnswer = this.getRandomInt(3);
    this.currentQuestion = 1;
  }

  /**
   * changePracticeQuestions(clicked: string) : void
   * @param clicked - string that what answer button pressed
   * 
   * takes user input from practice button questions and decides if question is correct or not and will change question based on that
   */
  changePracticeQuestion(clicked: string) {
    // If the selected answer is correct...
    if (this.correctAnswer == parseInt(clicked) && !this.finishedPractice) {
      this.showCorrect();
      //Update the question element to the next question
      var questionToChange = document.getElementById("question");
      if (questionToChange != null && this.currentQuestion <= 5)
        questionToChange.innerHTML = binary_practice_questions[this.currentQuestion].question;

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
              wrongButtons.innerHTML = binary_practice_questions[this.currentQuestion].wrong_answer1
            if(wrongAnswers == 1)
              wrongButtons.innerHTML = binary_practice_questions[this.currentQuestion].wrong_answer2
            if(wrongAnswers == 2)
              wrongButtons.innerHTML = binary_practice_questions[this.currentQuestion].wrong_answer3
          wrongAnswers++;
          }
        }
      }

      // Changes the correct answer button to the provided correct answer
      if(correctButtonToChange != null)
        correctButtonToChange.innerHTML = binary_practice_questions[this.currentQuestion].correct_answer;

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

  /**
   * changePracticeQuestions(clicked: string) : void
   * @param clicked - string that what answer button pressed
   * 
   * takes user input from quiz button questions and decides if question is correct or not and will change question based on that
   */
  changeQuizQuestion(clicked: string) {
    if (this.correctAnswer == parseInt(clicked) && !this.finishedQuiz) {
      this.showCorrect();
      var questionToChange = document.getElementById("question");
      if (questionToChange != null  && this.currentQuestion < 5)
        questionToChange.innerHTML = binary_quiz_questions[this.currentQuestion].question;
      this.correctAnswer = this.getRandomInt(4);

      // For loop that changes each button that's not the generated random number to each of the wrong answers in the list
      var correctButtonToChange = document.getElementById(this.correctAnswer.toString());
      var i: number;
      var wrongAnswers = 0;
      for(i=1; i<5; i++){
        if(i!=this.correctAnswer){
          var wrongButtons = document.getElementById(i.toString())
          if(wrongButtons !=null){
            if(wrongAnswers == 0)
              wrongButtons.innerHTML = binary_quiz_questions[this.currentQuestion].wrong_answer1
            if(wrongAnswers == 1)
              wrongButtons.innerHTML = binary_quiz_questions[this.currentQuestion].wrong_answer2
            if(wrongAnswers == 2)
              wrongButtons.innerHTML = binary_quiz_questions[this.currentQuestion].wrong_answer3
          wrongAnswers++;
          }
        }
      }

      if(correctButtonToChange != null)
        correctButtonToChange.innerHTML = binary_quiz_questions[this.currentQuestion].correct_answer;

      this.currentQuestion = this.currentQuestion + 1;


      if (this.currentQuestion == 6)
        this.finishedQuiz = true;
    }
    else if (!this.finishedQuiz) {
      this.showIncorrect();
    }

  }

  /**
   * async setFirstQuestion()
   * 
   * required because of loading delays
   * shows the first question when practice questions are opened
   */
  async setFirstQuestion(){
    // Waits 20 miliseconds for the elements to load
    await this.sleep(20);

    // Gets the element of id "question" and changes it to the first question in the list
    var question = document.getElementById("question");
    if(question!=null)
    question.innerHTML = binary_practice_questions[0].question;

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
            wrongButtons.innerHTML = binary_practice_questions[0].wrong_answer1
          if(wrongAnswers == 1)
            wrongButtons.innerHTML = binary_practice_questions[0].wrong_answer2
          if(wrongAnswers == 2)
            wrongButtons.innerHTML = binary_practice_questions[0].wrong_answer3
        wrongAnswers++;
        }
      }// End of outside if statement
    }// End of for loop

    // Sets the text of the correct answer button to the correct answer
    if(correctButtonToChange != null)
    correctButtonToChange.innerHTML = binary_practice_questions[0].correct_answer;
  }

  /**
   * async setFirstQuizQuestion()
   * 
   * required because of loading delays
   * shows the first question when quiz questions are opened
   */
  async setFirstQuizQuestion(){
    await this.sleep(20);
    var question = document.getElementById("question");
    if(question!=null)
    question.innerHTML = binary_quiz_questions[0].question;

    var correctButtonToChange = document.getElementById(this.correctAnswer.toString());
    var i: number;
    var wrongAnswers = 0;
    for(i=1; i<5; i++){
      if(i!=this.correctAnswer){
        var wrongButtons = document.getElementById(i.toString())
        if(wrongButtons !=null){
          if(wrongAnswers == 0)
            wrongButtons.innerHTML = binary_quiz_questions[0].wrong_answer1
          if(wrongAnswers == 1)
            wrongButtons.innerHTML = binary_quiz_questions[0].wrong_answer2
          if(wrongAnswers == 2)
            wrongButtons.innerHTML = binary_quiz_questions[0].wrong_answer3
        wrongAnswers++;
        }
      }// End of outside if statement
    }// End of for loop
    if(correctButtonToChange != null)
    correctButtonToChange.innerHTML = binary_quiz_questions[0].correct_answer;
  }

  /**
   * getRandomInt(max: number) : int
   * 
   * @param max - the upper bound of random number generator
   * @returns - a random int within the range of 1-max
   * 
   * takes upper bound of random number to generate and will return int within the range of 1-max
   */
  getRandomInt(max: number) {
    return Math.floor(Math.random() * max) + 1;
  }

  /**
   * async showIncorrect()
   * 
   * will display if the chosen answer is incorrect, then will make it dissapear after 2 seconds
   */
  async showIncorrect() {
    this.isCorrect = false;
    this.isIncorrect = true;
    await this.sleep(2000);
    this.isIncorrect = false;
  }

  /**
   * async showCorrect()
   * 
   * will display if the chosen answer is correct, then will make it dissapear after 2 seconds
   */
  async showCorrect() {
    this.isIncorrect = false;
    this.isCorrect = true;
    await this.sleep(2000);
    this.isCorrect = false;
  }
}