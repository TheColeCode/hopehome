import React from 'react';
import Header from './Components/Header';
import Banner from './Components/Banner';
import './Styles/App.css';

const App = ({ children }) => (

  <div>
    <Header />
    <Banner />
    <main>
      {children}
    </main>
    <footer>
      © 2019 Hope Home
    </footer>
   </div>

);

export default App;