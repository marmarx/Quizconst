import { phrases } from '../data'

// --- HELPERS ---
const randomNum = (max) => Math.floor(Math.random() * max)

function Phrase({ correctAnswer, selectedOption }) {

  const setPhrase = () => {
    const key = !selectedOption
      ? 'select'
      : (selectedOption === correctAnswer
        ? 'correct'
        : 'incorrect'
      )

    const availablePhrases = phrases[key]
    const i = randomNum(availablePhrases.length)
    const p = availablePhrases[i]
    if(key !== 'incorrect') return p

    const j = randomNum(phrases.try.length)
    const t = phrases.try[j]
    return `${p}... ${t}`
  }

  const phrase = setPhrase()
  return <p>{ phrase }</p>
}

export default Phrase