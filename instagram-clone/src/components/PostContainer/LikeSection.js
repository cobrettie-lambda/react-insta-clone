import React from 'react';

const LikeSection = props => {
    return [
        <div 
            className="like-section"
            key="likes-icons-container"
            onClick={props.incrementLike}
        >
            <div className="like-section-icon1">
                <i className="far fa-heart" />
            </div>
            <div className="like-section-icon2">
                <i className="far fa-comment" />
            </div>
        </div>,
        <div className="like-section-likes"            key="likes-container">
            <div className="like-section-wrapper">      {`${props.likes} likes`}
            </div>
        </div>
    ];
};

export default LikeSection;