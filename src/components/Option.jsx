// function AnswerOption({ option, onAnswer, correctAnswer, selectedOption }) {  // AnswerOption(props)
function AnswerOption({ option, onAnswer, correctAnswer, selectedOption }) {  // AnswerOption(props)

  const setClass = () => {
    if (!selectedOption) return ''

    if (option === correctAnswer)  return 'correct'
    if (option === selectedOption) return 'incorrect'
  }

  const resultClass = setClass()

  return (
    <button
      className={resultClass}
      disabled={selectedOption}
      onClick={() => onAnswer(option)}
    >
      { option }
    </button>
  )
}

export default AnswerOption