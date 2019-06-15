import React from 'react';

const CommentInput = props => {
    return (
        // forms receive their own component
        <form>
            <input type="text" placeholder="Add comment... " />
        </form>
    );
};

export default CommentInput;