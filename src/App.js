import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import GifList from './components/GifList'
import data from './data/gifs'

function App(props) {
  const gifs = data;
  const loading = false;
  const error = "";
  
  return (
    <div className="App">
      <h1> Find Gifs Here:</h1>

      <form>
        <input />
        <button>Search</button>
      </form>

      {
        loading ? <h3> Looking for Gif...</h3> : <GifList gifs={gifs} />
      }
    </div>
  );
}

export default App;