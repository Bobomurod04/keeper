import React from 'react';
import Header from './Header';
import Table from './Table';
import Node from './Node';
import Footer from './Footer';

const App = () => {
  return (
    <div className="container bg-secondary bg-opacity-25">
        <Header />
        <Node />
        <Table />
        <Footer />
    </div>
  )
}

export default App;