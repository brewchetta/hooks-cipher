import React, {useState, useEffect} from 'react'
import {caesarsCipher, backwardsCipher} from '../ciphers/index'

const MessageCard = ({currentCipher}) => {

  const [input, setInput] = useState('')
  const [decoded, setDecoded] = useState(false)
  const [timer, setTimer] = useState(5)

  const handleDecode = event => {
    event.preventDefault()
    setDecoded(!decoded)
  }

  // Create a selfDestruct function that wipes the message, resets the time, and sets decoded to false
  const selfDestruct = () => {
    setInput('')
    setDecoded(false)
    setTimer(5)
  }

  // With useEffect, once the message has been decoded create a countdown that ends with the self-destruct
  useEffect(
    () => {

      const tickTock = () => {
        if (timer === 0) {
          selfDestruct()
        } else {
          setTimer(timer - 1)
        }
      }

      if (decoded) {
        const timeout = setTimeout(tickTock, 1000)

        return () => clearTimeout(timeout)
      }
    },
    [decoded, timer]
  )

  // Create a function 'decodeMessage' that, depending on the currentCipher, will decode the input
  const decodeMessage = () => {
    switch (currentCipher) {
      case 'caesarsCipher':
        return caesarsCipher(input)
      case 'backwardsCipher':
        return backwardsCipher(input)
      default:
        return 'Could not properly encrypt'
    }


  }

  return (
    <>

        <p>Super Secret Message:</p>

        {/* Create a controlled form that holds the secret message in state and, once submitted, sets the state to decoded. Remove the form while the message is decoded */}
        {!decoded ? (
          <form onSubmit={handleDecode}>
            <input type='text' value={input} onChange={event => setInput(event.target.value)} />
            <input type='submit' value='Decode Message' />
          </form>
        ) : null }

        {/* If the message has been decoded, show the decoded message */}
        {decoded ? <p>{decodeMessage()}</p> : null}

        {/* Once the timer starts, show the number of seconds left here */}
        {decoded ? <h3>{timer}</h3> : null}

    </>
  )
}

export default MessageCard
