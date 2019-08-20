import React from 'react'

const CipherSelector = (deconstructYourPropsHere) => {

  /* Create a simple dropdown that sets which cipher is being used by the app */

  return (
    <select>
      <option value='caesarsCipher'>Caesar's Cipher</option>
      <option value='backwardsCipher'>Backwards Cipher</option>
    </select>
  )
}

export default CipherSelector
