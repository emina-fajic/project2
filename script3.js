const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: "Django Unchained, Inception, What's eating Gilbert Grape?",
    answers: [
      { text: 'Jamie Foxx', correct: false },
      { text: 'Leonardo DiCaprio', correct: true },
      { text: 'Christoph Waltz', correct: false },
      { text: 'Morgan Freeman', correct: false }
    ]
  },
  {
    question: "V for Vendetta, The Matrix, Transformers?",
    answers: [
      { text: 'Laurence Fishburne',  correct: false },
      { text: 'John Hurt', correct: false },
      { text: 'Keanu Reeves', correct: false },
      { text: 'Hugo Weaving', correct: true }
    ]
  },
  {
    question: "The Dark Knight, American Psycho, Americal Hustle?",
    answers: [
      { text: 'Heath Ledger', correct: false },
      { text: 'Christian Bale', correct: true },
      { text: 'Ben Affleck', correct: false },
      { text: 'Mark Wahlberg', correct: false }
    ]
  },
    {
        question: "Mad Max:Fury Road, Legend, Warrior?",
        answers: [
            { text: 'Will Smith', correct: false },
            { text: 'Evan McGregor', correct: false },
            { text: 'Bradley Cooper', correct: false },
            { text: 'Tom Hardy', correct: true }
        ]
    },
    
    {
        question: "The Man from U.N.C.L.E., Love Actually, Notting Hill?",
        answers: [
            { text: 'Hugh Grant', correct: true },
            { text: 'Colin Firth', correct: false },
            { text: 'Henry Cavill', correct: false },
            { text: 'Armie Hammer', correct: false }
        ]
    },
    
    {
        question: "Dunkirk, Inception, 28 Days Later?",
        answers: [
            { text: 'Harry Styles', correct: false },
            { text: 'Tom Hardy', correct: false },
            { text: 'Cillian Murphy', correct: true },
            { text: 'Samuel L. Jackson', correct: false }
        ]
    },
    
    {
        question: "Guardians of the Galaxy, Jurassic World, The Magnificent Seven?",
        answers: [
            { text: 'Chris Evans', correct: false },
            { text: 'Jeffrey Goldblum', correct: false },
            { text: 'Chris Pratt', correct: true },
            { text: 'Vin Diesel', correct: false }
        ]
    },
    
    {
        question: "In time, Magic Mike, I am Number Four",
        answers: [
            { text: 'Cillian Murphy', correct: false },
            { text: 'Justin Timberlake', correct: false },
            { text: 'Johnny Galecki', correct: false },
            { text: 'Alex Pettyfer', correct: true }
        ]
    }
]