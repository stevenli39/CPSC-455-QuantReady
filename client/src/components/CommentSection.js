import React, { useState, useEffect } from 'react';
import * as commentApi from '../api/comments';
import '../styles/commentTab.css'

function CommentSection({ questionID }) {
    const [comments, setComments] = useState([]);
    const [content, setContent] = useState('');

    useEffect(() => {
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
        try {
            const commentData = {
                questionID: questionID,
                userID: 'defaultUserID', // Replace with dynamic userID after implementing authentication
                content: content,
                timeStamp: new Date().toISOString(),
                firstName: 'John' // Replace with user's real name after implementing authentication
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
            <h2>Comments</h2>
            
            <div className="comment-input">
                <textarea 
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Add your comment here..."
                />
                <button onClick={handlePostComment}>Post Comment</button>
            </div>

            <ul className="comment-list">
                {comments.map(comment => (
                    <li key={comment._id}>
                        <strong>{comment.firstName}</strong> ({comment.timeStamp}): {comment.content}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CommentSection;
