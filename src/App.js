import React from 'react';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* start header */}
      <Header />
      {/* end header */}

      {/* start content */}
      <Container />
      {/* end content */}

      {/* start footer */}
      <Footer />
      {/* end footer */}
    </div>
  );
}

export default App;
