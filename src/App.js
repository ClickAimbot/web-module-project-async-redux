import { connect } from 'react-redux';
import './App.css';
import { useEffect } from 'react';

import { fetchGifs } from './actions';

import GifList from './components/GifList'
import GifForm from './components/GifForm';

import axios from 'axios';

function App(props) {
  const { loading, error } = props;

  useEffect(() => {
    console.log("fetch start")
    props.fetchGifs();
    axios.get("https://api.giphy.com/v1/gifs/search?api_key=gJ750fydf758eYuCV01yOiKF9fSbVESt&q=Marvel&limit=5&offset=5&rating=g&lang=en&bundle=clips_grid_picker")
      .then(res => {
        console.log(res)
      })
  },[]);
  return (
    <div className="App">
      <h1> Find Gifs Here:</h1>
      <GifForm />

      {
        (error !== "") && <h3>{error}</h3>
      }
      {
        loading ? <h3> Looking for Gif...</h3> : <GifList/>
      }

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  }
}
export default connect(mapStateToProps, { fetchGifs })(App);