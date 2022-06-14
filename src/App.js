import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import SignedInLinks from './components/layout/SignedInLinks';
import SignedOutLinks from './components/layout/SignedOutLinks';
import ProjectList from './components/projects/ProjectList';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <SignedInLinks />
        <SignedOutLinks />
        <Dashboard />
        <ProjectList />
      </div>
    </BrowserRouter>
  );
}

export default App;
