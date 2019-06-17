import React from 'react';

const CommentInput = props => {
    return (
        // forms receive their own component
        <form onSubmit={props.submitComponent}>
            <input 
            type="text" 
            placeholder="Add comment... "
            value={props.comment}
            onChange={props.changeComment}
            />
        </form>
    );
};

export default CommentInput;