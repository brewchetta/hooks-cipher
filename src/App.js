// React (don't forget to import our new hooks)
import React from 'react'
// Ciphers
import {caesarsCipher, backwardsCipher} from './ciphers'
// Styling
import './App.css'

function App() {

  /* Use hooks here to set the state */

  const handleSelectorChange = event => {
    /* Set state for current cipher here */
  }

  const handleInputChange = event => {
    /* Set state for form input here */
  }

  const handleSubmit = event => {
    event.preventDefault()
    /* Update state here */
  }

  return (
    <div className="App">

      <h1>Top Secret: For Your Eyes Only</h1>

      {/*------ Select Cipher ------*/}

      <select
      onChange={handleSelectorChange}
      value='none'>

        <option value='none'>---</option>
        <option value='caesarsCipher'>Caesar's Cipher</option>
        <option value='backwardsCipher'>Backwards Cipher</option>

      </select>

      {/*------ Message Input ------*/}

      <p>Super Secret Message:</p>

      <form onSubmit={handleSubmit}>

        <input type='text'
        onChange={handleInputChange}
        value=''
        placeholder='Secrets go here' />

        <input type='submit' value='Encode Message' />

      </form>

    </div>
  );
}

export default App;
