// React
import React, {useState} from 'react';
// Components
import CipherSelector from './CipherSelector'
import MessageCard from './MessageCard'
// Styling
import '../App.css';

function App() {

  /* Use hooks to declare your State here */
  const [currentCipher, setCurrentCipher] = useState('caesarsCipher')

  const chooseCurrentCipher = event => {
    setCurrentCipher(event.target.value)
  }

  return (
    <div className="App">
      <h1>Top Secret: For Your Eyes Only</h1>

      {/* Pass down props as needed to the child components */}

      <CipherSelector {...{currentCipher, chooseCurrentCipher}} />

      <MessageCard currentCipher={currentCipher} />

    </div>
  );
}

export default App;
