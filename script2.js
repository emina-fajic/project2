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
    question: 'Who collects gadgets and gizmos?',
    answers: [
      { text: 'Aurora', correct: false },
      { text: 'Ariel', correct: true },
      { text: 'Rapunzel', correct: false },
      { text: 'Tiana', correct: false }
    ]
  },
  {
    question: "Which villain owned a magic mirror?",
    answers: [
      { text: 'Ursula',  correct: false },
      { text: 'Maleficen', correct: false },
      { text: 'Cruella de Ville', correct: false },
      { text: 'Evil Queen', correct: true }
    ]
  },
  {
    question: "Which prince fought against the dragon?",
    answers: [
      { text: 'Li Shang', correct: false },
      { text: 'Prince Philipp', correct: true },
      { text: 'Flynn Rider', correct: false },
      { text: 'Prince Eric', correct: false }
    ]
  },
    {
        question: "What is the name of Snow White's Prince?",
        answers: [
            { text: 'Prince Ferdinand', correct: true },
            { text: 'Prince Eric', correct: false },
            { text: 'Prince Charles', correct: false },
            { text: 'Prince Philipp', correct: false }
        ]
    },
    
    {
        question: "Which book does Belle read to the Beast?",
        answers: [
            { text: 'Romeo and Juliet', correct: true },
            { text: 'Pride and Prejudice', correct: false },
            { text: 'A Tale of two cities', correct: false },
            { text: 'The Princess and the Frog', correct: false }
        ]
    },
    
    {
        question: "Why does Hades tell Meg that Hercules is no good?",
        answers: [
            { text: '"He is a guy"', correct: true },
            { text: '"He is a snob"', correct: false },
            { text: '"He is a celebrity"', correct: false },
            { text: '"He has only known you 5 minutes"', correct: false }
        ]
    },
    
    {
        question: "Which season does Olaf love the most?",
        answers: [
            { text: 'spring', correct: false },
            { text: 'summer', correct: true },
            { text: 'autumn', correct: false },
            { text: 'winter', correct: false }
        ]
    },
    
    {
        question: "Why did Tinkerbell help Captain Hook?",
        answers: [
            { text: 'She is in love with Hook', correct: false },
            { text: 'Hook threatened Peter', correct: false },
            { text: 'Hook put a spell on her', correct: false },
            { text: 'Tinkerbell was jealous of Wendy', correct: true }
        ]
    }
]