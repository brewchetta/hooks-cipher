// React
import React, {useState, useEffect} from 'react';
// Ciphers
import {caesarsCipher, backwardsCipher} from './ciphers'
// Styling
import './App.css';

function App() {

  const [cipher, setCipher] = useState('none')
  const [message, setMessage] = useState('')
  const [encoded, setEncoded] = useState(false)

  /* Instructors: Build out the controlled form for the cipher selector */
  const handleSelectorChange = event => {
    setCipher(event.target.value)
  }

  /* Instructors: Build something like this to show useEffect */
  useEffect(() => {
    console.log(`Your cipher is now ${cipher}`)
    return () => console.log('Cleaning up')
  }, [cipher])

  /* Instructors: Once selector has been controlled, have students build out the rest of the app */

  const handleInputChange = event => {
    setMessage(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    if (cipher === 'caesarsCipher') {
      setMessage( caesarsCipher(message) )
    } else if (cipher === 'backwardsCipher') {
      setMessage( backwardsCipher(message) )
    }

    setEncoded(true)
  }

  useEffect(() => {

    if (encoded) {
      const tickTock = setTimeout(() => {
        setMessage('')
        setEncoded(false)
      }, 5000)
      return () => clearTimeout(tickTock)
    }

  }, [encoded])

  return (
    <div className="App">

      <h1>Top Secret: For Your Eyes Only</h1>

      <select onChange={handleSelectorChange} value={cipher}>
        <option value='none'>---</option>
        <option value='caesarsCipher'>Caesar's Cipher</option>
        <option value='backwardsCipher'>Backwards Cipher</option>
      </select>

      <p>Super Secret Message:</p>

      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleInputChange} value={message} placeholder='Secrets go here' />
        <input type='submit' value='Encode Message' />
      </form>

    </div>
  );
}

export default App;
