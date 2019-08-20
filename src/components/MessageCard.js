// React
import React from 'react'
// Ciphers
import {caesarsCipher, backwardsCipher} from '../ciphers/index'

const MessageCard = (deconstructYourPropsHere) => {

  // With useEffect, once the message has been decoded create a countdown that ends with the self-destruct

  // Create a 'selfDestruct' function that wipes the message and resets the form

  // Create a function 'decodeMessage' that decodes the message with the current cipher

  return (
    <>

        <p>Super Secret Message:</p>


        {/* Create a controlled form that holds the secret message in state and, once submitted, sets the state to decoded.*/}
        <form>
          <input type='text' />
          <input type='submit' value='Decode Message' />
        </form>

        {/* If the state is decoded, remove the form */}

        {/* If the message has been decoded, show the decoded message */}
        <p>Decoded message goes here</p>

        {/* For the bonus: once the timer starts, show the number of seconds left here */}

    </>
  )
}

export default MessageCard
