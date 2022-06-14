import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import SignedInLinks from './components/layout/SignedInLinks';
import SignedOutLinks from './components/layout/SignedOutLinks';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </BrowserRouter>
  );
}

export default App;
