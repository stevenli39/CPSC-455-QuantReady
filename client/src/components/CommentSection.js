import React, { useState, useEffect } from 'react';
import * as commentApi from '../api/comments';
import "../styles/commentTab.css"
import { Button, TextField } from '@mui/material';
import { connect } from 'react-redux';
import { fetchUser } from '../redux/actions/authActions';
import { useSelector } from 'react-redux';


function CommentSection({ questionID }) { 
    const [comments, setComments] = useState([]);
    const [content, setContent] = useState('');
    const [isMinimized, setIsMinimized] = useState(false); 
    const user = useSelector(state => state.auth.user);

    useEffect(() => {
        if (!questionID) {
            console.log("No question ID exists")
            return;
        }
        async function fetchComments() {
            try {
                const fetchedComments = await commentApi.fetchCommentsByQuestionID(questionID);
                setComments(fetchedComments);
            } catch (error) {
                console.error('Failed to fetch comments:', error);
            }
        }
        fetchComments();
    }, [questionID]);

    const handlePostComment = async () => {
        if (!questionID) {
            console.log("I am trying to post but No question ID exists")
            return null;
        } 

        const now = new Date();
        const timeStamp = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        
        try {
            const commentData = {
                questionID: questionID,
                userID: user?._id || 'defaultUserID',
                content: content,
                timeStamp: timeStamp,
                firstName: user.firstName // Replace with user's real name after implementing authentication
            };
            const newComment = await commentApi.postComment(commentData);
            setComments([...comments, newComment]);
            setContent('');
        } catch (error) {
            console.error('Failed to post comment:', error);
        }
    };

    return (
        <div className="commentContainer">
                <button className="minimizeButton" onClick={() => setIsMinimized(!isMinimized)}>
                    {isMinimized ? '+' : '-'}
                </button>
                <div className="commentHeader">
                <h2>Comments</h2>
            </div>
            
            {!isMinimized && ( // Check if it's minimized
                <>
                    <div className="comment-input">
                        <TextField
                            variant="outlined"
                            multiline
                            rows={4}
                            fullWidth
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Add your comment here..."
                        />

                        <Button variant="contained" color="primary" onClick={handlePostComment}>
                            Post Comment
                        </Button>
                    </div>

                    <ul className="comment-list">
                        {comments.map(comment => (
                            <li key={comment._id}>
                                <strong>{comment.firstName}</strong> ({comment.timeStamp}): {comment.content}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}



const mapStateToProps = (state) => {
    console.log(state.user)
    return {
        user: state.user 
    };
};

const mapDispatchToProps = {
    fetchUser
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentSection);
