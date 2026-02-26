// TextAnimation.jsx
import React from 'react';
import './TextAnimation.css';

const TextAnimation = () => {
  return (
    <div className="container">
      <h1>{' '}
        <span className="animated-text">
          <span>Coder</span>
          <span>Developer</span>
          <span>Programmer</span>
          <span>Freelancer</span>
        </span>
      </h1>
    </div>
  );
};

export default TextAnimation;