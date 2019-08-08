import React, {useState, useEffect} from 'react'
import {caesarsCipher, backwardsCipher} from '../ciphers/index'

const MessageCard = ({currentCipher}) => {

  const [input, setInput] = useState('')
  const [encoded, setEncoded] = useState(false)
  const [timer, setTimer] = useState(5)

  const handleEncode = event => {
    event.preventDefault()
    setEncoded(!encoded)
  }

  // Create a selfDestruct function that wipes the message, resets the time, and sets encoded to false
  const selfDestruct = () => {
    setInput('')
    setEncoded(false)
    setTimer(5)
  }

  // Create a callback function tickTock that decrements the timer and if it hits zero calls the self-Destruct
  const tickTock = () => {
    if (timer > 0) {
      setTimer(timer - 1)
    } else {
      selfDestruct()
    }
  }

  // With useEffect, once the message has been encoded create a countdown that ends with the self-destruct
  useEffect(
    () => {
      if (encoded) {
        setTimeout(tickTock, 1000)
      }
    }
  )

  // Create a function 'encodeMessage' that, depending on the currentCipher, will encode the input
  const encodeMessage = () => {
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

        {/* Create a controlled form that holds the secret message in state and, once submitted, sets the state to encoded. Remove the form while the message is encoded */}
        {!encoded ? (
          <form onSubmit={handleEncode}>
            <input type='text' value={input} onChange={event => setInput(event.target.value)} />
            <input type='submit' value='Encode Message' />
          </form>
        ) : null }

        {/* If the message has been encoded, show the encoded message */}
        {encoded ? <p>{encodeMessage()}</p> : null}

        {/* Once the timer starts, show the number of seconds left here */}
        {encoded ? <h3>{timer}</h3> : null}

    </>
  )
}

export default MessageCard
