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
    question: "Sarah Hyland?",
    answers: [
      { text: '19', correct: false },
      { text: '26', correct: true },
      { text: '17', correct: false },
      { text: '22', correct: false }
    ]
  },
  {
    question: "Jennifer Aniston?",
    answers: [
      { text: '40',  correct: false },
      { text: '37', correct: false },
      { text: '52', correct: false },
      { text: '48', correct: true }
    ]
  },
  {
    question: "Sofia Vergaras?",
    answers: [
      { text: '50', correct: false },
      { text: '44', correct: true },
      { text: '36', correct: false },
      { text: '40', correct: false }
    ]
  },
    {
        question: "Neil Patrick Harris?",
        answers: [
            { text: '48', correct: false },
            { text: '42', correct: false },
            { text: '38', correct: false },
            { text: '44', correct: true }
        ]
    },
    
    {
        question: "Matthew Perry?",
        answers: [
            { text: '47', correct: true },
            { text: '61', correct: false },
            { text: '45', correct: false },
            { text: '54', correct: false }
        ]
    },
    
    {
        question: "Jim Parsons aka Sheldon?",
        answers: [
            { text: '37', correct: false },
            { text: '52', correct: false },
            { text: '44', correct: true },
            { text: '40', correct: false }
        ]
    },
    
    {
        question: "Chris Pratt?",
        answers: [
            { text: '43', correct: false },
            { text: '40', correct: false },
            { text: '38', correct: true },
            { text: '35', correct: false }
        ]
    },
    
    {
        question: "Matt LeBlanc",
        answers: [
            { text: '56', correct: false },
            { text: '45', correct: false },
            { text: '61', correct: false },
            { text: '49', correct: true }
        ]
    }
]