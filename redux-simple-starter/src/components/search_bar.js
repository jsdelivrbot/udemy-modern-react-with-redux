/**
 * Created by krzysztofk on 2017-06-26.
 */
import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props)  {
        super(props);
        this.state = {
            term: ''
        };
    }
    render() {
        return (
            <input onChange={this.onInputChange} />
            // <input onChange={event => console.log(event.target.value)} />
        )
    }

    onInputChange(event) {
        // console.log("On Input Change event occurred");
        console.log("Event: " + event);
        console.log("Value: " + event.target.value);
    }

}

export default SearchBar;