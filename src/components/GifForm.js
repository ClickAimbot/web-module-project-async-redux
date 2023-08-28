import { connect } from 'react-redux';

import { getGifs } from '../actions';

const GifForm = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("form submitted");
        props.getGifs();
    }

    const handleChange = (e) => {
        // console.log(e.target.value);
        
    }

    return (<form onSubmit={handleSubmit}>
        <input onChange={handleChange}/>
        <button>Search</button>
    </form>);
}

export default connect(null, { getGifs })(GifForm);