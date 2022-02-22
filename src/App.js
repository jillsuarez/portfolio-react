import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [currentPage, setCurrentPage] = useState('About');
  const renderPage = () => {
      switch(currentPage) {
          case 'About':
              return <About/>;
          case 'Resume':
              return <Resume/>;
          case 'Portfolio':
              return <Portfolio/>;
          case 'Contact':
              return <Contact/>;
          default:
              return <About/>;
  }
  };
  const handlePageChange = (page) => setCurrentPage(page);
  return (
      <div>
          <Nav currentPage = {currentPage} handlePageChange={handlePageChange}/>
          <main id="main">
              {renderPage()}
          </main>
      </div>
  );
}

export default App;
