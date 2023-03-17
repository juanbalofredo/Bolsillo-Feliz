import React, { useState } from 'react';
import './comment.css';

function CommentForm({ onSubmit }) {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ author, content });
    setAuthor('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        value={author}
        onChange={(event) => setAuthor(event.target.value)}
        className="comment-form-field"
      />
      <textarea
        placeholder="Leave a comment..."
        value={content}
        onChange={(event) => setContent(event.target.value)}
        className="comment-form-field"
      />
      <button type="submit" className="comment-form-button">
        Submit
      </button>
    </form>
  );
}

function CommentList() {
  const [comments, setComments] = useState([]);

  const handleSubmit = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div className="comment-list-container">
      <h2>Comments</h2>
      <CommentForm onSubmit={handleSubmit} />
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.map((comment, index) => (
          <Comment key={index} author={comment.author} content={comment.content} />
        ))
      )}
    </div>
  );
}

function Comment({ author, content }) {
  return (
    <div className="comment-container">
      <h3 className="comment-author">{author}</h3>
      <p className="comment-content">{content}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="app-container">
      <h1>Comentarios</h1>
      <CommentList />
    </div>
  );
}
