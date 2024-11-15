import React from 'react';
import SignIn from './components/signin';
import SignUp from './components/signup';
import './styles/style.css';

function App() {
  return (
    <div className="App">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default App;

