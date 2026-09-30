import Flashcard from './Flashcard'

const endLine = ['Awesome!', 'You did great!', 'Good work!', 'Better luck next time...']

const getQuartile = (percentage) => {
  const bounded = Math.max(0, Math.min(100, percentage))
  if (bounded === 0) return 1
  
  return Math.ceil(bounded / 25)
}

function Options(props) {

  const perc = Number(props.percentage.replace('%', ''))
  const quartile = getQuartile(perc)
  const line = endLine[quartile]

  if(props.cardIndex === null)
    return (
      <div className="result">
        You got {props.score} correct out of {props.len} cards. {line}  🎉
      </div>
    )
  
  return (
    <Flashcard
      answerOrder={props.answerOrder}
      currentCard={props.currentCard}
      handleAnswer={props.handleAnswer}
      selectedOption={props.selectedOption}
    />
  )
}

export default Options