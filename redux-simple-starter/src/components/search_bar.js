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
        this.onInputChange = this.onInputChange.bind(this);
    }
    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.setState({ term : event.target.value })} />
            </div>
        )
    }

    onInputChange(event) {
        const term = event.target.value;
        this.setState({ term });
    }

}

export default SearchBar;