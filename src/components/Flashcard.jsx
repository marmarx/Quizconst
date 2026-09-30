import Option from './Option'

function flashcard({ answerOrder, currentCard, handleAnswer, selectedOption }) {
  return (
    <div className="answers">
      { answerOrder.map(order => {
        const option = currentCard.options[order]
        return (<Option
          key={option}
          option={option}
          onAnswer={handleAnswer}
          correctAnswer={currentCard.back}
          selectedOption={selectedOption}
        />)
      })}
    </div>
  )
}

export default flashcard