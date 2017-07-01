/**
 * Created by krzysztofk on 2017-06-26.
 */
import React from 'react';

// ({ video }) <==> (props) && const video = props.video
const VideoListItem = ({video}) => {

    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;

    console.log(video);

    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {title}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;