import Phrase from './components/Phrase'
import Options from './components/Options'
import { flashcards, lastCard } from './data'
import { useState } from 'react'

// --- HELPERS ---
const randomNum = (max) => Math.floor(Math.random() * max)

const prevIndexes = new Set()
const numCards = flashcards.length
const randomIndex = () => randomNum(numCards)

const randomCardIndex = () => {
  if(prevIndexes.size === numCards) return null
  
  let index = randomIndex()
  
  while(prevIndexes.has(index))
    index = randomIndex()
  
  return index
}

const answerOrder   = []
const answerIndexes = []

const shuffleArray = () => {
  answerOrder.length = 0
  answerIndexes.push(0, 1, 2, 3)

  for(let i = answerIndexes.length; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    answerOrder.push(answerIndexes[j])
    answerIndexes.splice(j, 1)
  }
}
shuffleArray()

const initialCard = randomCardIndex()
prevIndexes.add(initialCard)

function App() {
  // --- LOCAL STATE ---
  const [score, setScore] = useState(0)
  const [cardIndex, setCardIndex] = useState(initialCard)
  const [selectedOption, setSelectedOption] = useState(null)
  
  const currentCard = cardIndex === null ? lastCard : flashcards[cardIndex]
  const percentage = `${Math.floor(10000 * score / flashcards.length)/100}%`
  
  const handleAnswer = (selectedAnswer) => {
    if(selectedOption !== null) return
    
    if (prevIndexes.size === 0) setScore(0)
    setSelectedOption(selectedAnswer)
    
    const endGame = cardIndex === null
    if(endGame) prevIndexes.clear()
    
    const correctAnswer = selectedAnswer === currentCard.back
    const newIndex = correctAnswer ? randomCardIndex(cardIndex) : cardIndex
    
    if(correctAnswer) setScore(score + 1)
    else setScore(0)
    
    setTimeout(() => {
      if(newIndex !== null) prevIndexes.add(newIndex)
      // console.log([...prevIndexes])

      setSelectedOption(null)
      setCardIndex(newIndex)
      shuffleArray()
    }, 1050)
  }

  return (
    <main className="App">
      <header>
        <h1>Quizconst</h1>
        <div className="leftHeader">
          <span>Card { prevIndexes.size }/{ flashcards.length }</span>
          <span>Score <strong>{ score } ({ percentage })</strong></span>
        </div>
      </header>

      <div className="flashcard">
        <h2>{ currentCard.front }</h2>
      </div>

        <Options
          cardIndex={cardIndex}
          score={score}
          len={flashcards.length}
          percentage={percentage}
          answerOrder={answerOrder}
          currentCard={currentCard}
          handleAnswer={handleAnswer}
          selectedOption={selectedOption}
        />

      <div className="game-hint">
        <p>Every correct answer increases your score. One mistake resets it. </p>
        <Phrase
          correctAnswer={currentCard.back}
          selectedOption={selectedOption}
        />
      </div>
    </main>
  )
}

export default App