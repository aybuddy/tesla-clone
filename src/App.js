import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Header />
      <Home />
    </div>
  );
}

export default App;
