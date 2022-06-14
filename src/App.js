import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import SignedInLinks from './SignedInLinks';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <SignedInLinks />
      </div>
    </BrowserRouter>
  );
}

export default App;
