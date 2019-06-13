import React from 'react';

import './PostContainer.css';
import { IoIosHeartEmpty} from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = props => {
    return (
        <div className="post-container">
            <div className="user-info">
                <img className="profile-pic" src={props.post.thumbnailUrl} alt="Profile-pic"></img>
                <p>{props.post.username}</p>
            </div>
            <div className="user-post">
                <img className="user-post-img" src={props.post.imageUrl} alt="User-post"></img>
            </div>
            <div className="interaction">
                <div className="interact-icons">
                    <IoIosHeartEmpty className="heartIcon" />
                    <FaRegComment className="commentIcon" />
                </div>
                {props.post.likes} likes 
            </div>
            {props.post.comments.map((comment, index) => {
                console.log("===", comment);
                return (
                    <CommentSection key={index} props={comment} />
                );
            })}
            <div className="timeStamp">
                {props.post.timestamp}
            </div>
        </div>
    );
};

export default PostContainer;