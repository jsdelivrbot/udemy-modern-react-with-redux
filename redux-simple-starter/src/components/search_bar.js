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
            <div>
                <input onChange={this.onInputChange} />
                {/*<input onChange={() => this.onInputChange()} />*/}
                Value of the input: { this.state.term }
            </div>
        )
    }

    onInputChange(event) {
        const term = event.target.value;
        this.setState({ term });
    }

}

export default SearchBar;