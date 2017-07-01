/**
 * Created by krzysztofk on 2017-06-26.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = process.env.YOUTUBE_API_KEY;

YTSearch({
    key: API_KEY,
    term: 'surfboards'
}, function(data) {
    console.log(data);
});

// 1. Create a new component. This component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

// 2. Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(
    <App />,
    document.querySelector('.container')
);