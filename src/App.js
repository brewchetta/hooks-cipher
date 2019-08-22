// React (don't forget to import our new hooks)
import React from 'react';
// Ciphers
import {caesarsCipher, backwardsCipher} from './ciphers'
// Styling
import './App.css';

function App() {

  /* Use hooks here to set the state for the current input */

  const handleSelectorChange = event => {
    // Set state for current cipher here
  }

  const handleInputChange = event => {
    // Set state for form input here
  }

  const handleSubmit = event => {
    event.preventDefault()
    // Somewhere in here we need to update state which sets off a countdown timer
  }

  /* Import useEffect and think carefully */
  /* How will it only fire when certain pieces of state update? */

  return (
    <div className="App">

      <h1>Top Secret: For Your Eyes Only</h1>

      {/* Make this selector a controlled form using state and hooks, it determines  */}
      <select onChange={handleSelectorChange} value='none'>
        <option value='none'>---</option>
        <option value='caesarsCipher'>Caesar's Cipher</option>
        <option value='backwardsCipher'>Backwards Cipher</option>
      </select>

      <p>Super Secret Message:</p>

      {/* Create a controlled form that holds the secret message in state and */}
      {/* Once submitted, it encodes the message with the current cipher and begins a countdown to erase it */}
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleInputChange} value='' placeholder='Secrets go here' />
        <input type='submit' value='Decode Message' />
      </form>

    </div>
  );
}

export default App;
