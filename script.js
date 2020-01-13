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
    question: 'When did men first walk on the Moon?',
    answers: [
      { text: '1955', correct: false },
      { text: '1969', correct: true },
      { text: '1971', correct: false },
      { text: '1977', correct: false }
    ]
  },
  {
    question: 'Which of the following mountains is the shortest?',
    answers: [
      { text: 'Mount Kilimanjaro',  correct: false },
      { text: 'The Matterhorn', correct: false },
      { text: 'Mount Fuji', correct: false },
      { text: 'Mount Vesuvius', correct: true }
    ]
  },
  {
    question: 'In which of the following museums can you find "Mona Lisa"?',
    answers: [
      { text: 'The Guggenheim', correct: false },
      { text: 'The Getty Centre', correct: false },
      { text: 'The Louvre', correct: true },
      { text: 'The Metropolitan Museum of Arts', correct: false }
    ]
  },
    {
        question: "How many colors does a Rubick's cube have?",
        answers: [
            { text: '4', correct: false },
            { text: '6', correct: true },
            { text: '8', correct: false },
            { text: '9', correct: false }
        ]
    },
    
    {
        question: "Which country is often called 'the boot' due to its specific shape on map?",
        answers: [
            { text: 'Greece', correct: false },
            { text: 'Germany', correct: false },
            { text: 'Zimbabwe', correct: false },
            { text: 'Italy', correct: true }
        ]
    },
    
    {
        question: "Which of the following Disney movies doesn't have a sequel?",
        answers: [
            { text: 'Mulan', correct: false },
            { text: 'Wreck it Ralph', correct: false },
            { text: 'Big Hero 6', correct: true },
            { text: 'Cinderella', correct: false }
        ]
    },
    
    {
        question: "Which of the following letters represents the number 50 in Roman numerals?",
        answers: [
            { text: 'C', correct: false },
            { text: 'M', correct: true },
            { text: 'D', correct: false },
            { text: 'L', correct: true }
        ]
    },
    
    {
        question: "The first person in space was from which of the following countries?",
        answers: [
            { text: 'Russia', correct: true },
            { text: 'USA', correct: false },
            { text: 'Turkey', correct: false },
            { text: 'China', correct: false }
        ]
    }
]