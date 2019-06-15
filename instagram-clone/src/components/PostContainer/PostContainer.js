import React from 'react';

import Post from './Post';
import './Posts.css';

// import icons
// import { IoIosHeartEmpty} from "react-icons/io";
// import { FaRegComment } from "react-icons/fa";


const PostContainer = props => {
    return (
        <div>
            {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
        </div>
    );
};

export default PostContainer;