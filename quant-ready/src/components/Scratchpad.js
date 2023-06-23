// Scratchpad.js

import React, { useState } from 'react';
import '../styles/scratchpad.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateContent, updatePosition } from './actions/scratchpadActions';

const Scratchpad = () => {
  const position = useSelector(state => state.scratchpad.position);
  const content = useSelector(state => state.scratchpad.value);
  const dispatch = useDispatch();

  const [isDragging, setIsDragging] = useState(false);
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });

  const handleContent = (event) => {
    dispatch(updateContent(event.target.value));
  }

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setInitialPosition({
      x: event.clientX - position.x,
      y: event.clientY - position.y
    });
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const newPosition = {
        x: event.clientX - initialPosition.x,
        y: event.clientY - initialPosition.y
      };
      dispatch(updatePosition(newPosition));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="scratchpad"
      style={{ top: position.y, left: position.x }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <textarea
        value={content}
        onChange={handleContent}
        placeholder="Enter text..."
        style={{ width: '400px', height: '300px' }}
      />
      {/* Scratchpad content */}
    </div>
  );
};

export default Scratchpad;
