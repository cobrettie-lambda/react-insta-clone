import React from 'react';

import PostContainer.css;

const PostContainer = props => {
    return (
        <div className="post-container">
            <div className="user-info">
                <img className="profile-pic" src={props.post.thumbnailUrl} alt="Profile Image"></img>
                <p>{props.post.username}</p>
            </div>
            <div className="user-post">
                <img src={props.post.imageUrl} alt="User posted image"></img>
            </div>
        </div>
    );
};

export default Post PostContainer;