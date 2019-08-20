// React
import React from 'react';
// Components
import CipherSelector from './CipherSelector'
import MessageCard from './MessageCard'
// Styling
import '../App.css';

function App() {

  /* Use hooks to declare your State here */

  const chooseCurrentCipher = event => {

  }

  return (
    <div className="App">
      <h1>Top Secret: For Your Eyes Only</h1>

      {/* Pass down props as needed to the child components */}

      <CipherSelector chooseCurrentCipher={chooseCurrentCipher} />

      <MessageCard />

    </div>
  );
}

export default App;
