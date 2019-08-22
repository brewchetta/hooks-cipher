// React
import React, {useState} from 'react';
// Styling
import '../App.css';

function App() {

  /* Use hooks here to set the state for the current input */

  const handleSelectorChange = event => {
    // Now that we have a hook for the current cipher, how do we set it here?
  }

  const handleInputChange = event => {
    // When we type in the message, we ought to hold it in state as well!
  }

  const handleSubmit = event => {
    event.preventDefault()
    // Somewhere in here we update some state which sets off a countdown timer
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

      {/* Create a controlled form that holds the secret message in state and, once submitted, encodes the message and begins a countdown to erase it */}
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleInputChange} value='' placeholder='Secrets go here' />
        <input type='submit' value='Decode Message' />
      </form>

    </div>
  );
}

export default App;
