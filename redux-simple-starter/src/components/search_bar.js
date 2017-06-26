/**
 * Created by krzysztofk on 2017-06-26.
 */
import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <input onChange={this.onInputChange} />
        )
    }

    onInputChange(event) {
        // console.log("On Input Change event occurred");
        console.log("Value: " + event.target.value);
    }

}

export default SearchBar;