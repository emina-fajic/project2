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
    question: 'How many studio albums did the band release?',
    answers: [
      { text: '9', correct: true },
      { text: '8', correct: false },
      { text: '7', correct: false },
      { text: '13', correct: false }
    ]
  },
  {
    question: "Suicide&Redemption is the band's longest song. How long is it?",
    answers: [
      { text: '7mins and 54sec',  correct: false },
      { text: '11mins 23sec', correct: false },
      { text: '9min 57sec', correct: true },
      { text: '4min 58sec', correct: false }
    ]
  },
  {
    question: "Who was Metallica's first official lead guitarist?",
    answers: [
      { text: 'James Hetfield', correct: false },
      { text: 'Dave Mustaine', correct: true },
      { text: 'Lars Ulrich', correct: false },
      { text: 'Cliff Burton', correct: false }
    ]
  },
    {
        question: "When was Metallica officialy formed?",
        answers: [
            { text: 'November, 1980', correct: false },
            { text: 'March, 1982', correct: false },
            { text: 'October, 1981', correct: true },
            { text: 'July, 1985', correct: false }
        ]
    },
    
    {
        question: "How many singles were released from Metallica?",
        answers: [
            { text: '3', correct: false },
            { text: '6', correct: true },
            { text: '4', correct: false },
            { text: '8', correct: false }
        ]
    },
    
    {
        question: "In total, roughly how many albums has Metallica sold worldwide?",
        answers: [
            { text: '100 thousands', correct: false },
            { text: '60 million', correct: false },
            { text: '110 million', correct: true },
            { text: '45 million', correct: false }
        ]
    },
    
    {
        question: "Other than Hetfield and Ulrich, who has been in the band the longest?",
        answers: [
            { text: 'Kirk Hammet', correct: true },
            { text: 'Jason Newstead', correct: false },
            { text: 'Cliff Burton', correct: false },
            { text: 'John Frusciante', correct: false }
        ]
    },
    
    {
        question: "How many Grammy awards has the band won?",
        answers: [
            { text: '10', correct: false },
            { text: '3', correct: false },
            { text: '17', correct: false },
            { text: '9', correct: true }
        ]
    }
]