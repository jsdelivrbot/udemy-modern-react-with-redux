/**
 * Created by krzysztofk on 2017-06-26.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = process.env.YOUTUBE_API_KEY;


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.initializeVideos();
    }

    initializeVideos() {
        return YTSearch({
            key: API_KEY,
            term: 'surfboards'
        }, (videos) => {
            this.setState( {
                videos,
                selectedVideo: videos[0]
            } );
        });
    }


    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList videos={this.state.videos} />
            </div>
        )
    }

}

// 2. Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(
    <App />,
    document.querySelector('.container')
);