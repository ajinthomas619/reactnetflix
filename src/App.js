import React from 'react';
import axios from 'axios';
import './App.css';
import {orginals,action,comedy} from './urls'
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost url={orginals} title='Netflix Orginals'    />
    <RowPost url={action} title='Action'  isSmall   />
    <RowPost url={comedy} title='Comedy'  isSmall   />
    </div>
  );
}

export default App;
