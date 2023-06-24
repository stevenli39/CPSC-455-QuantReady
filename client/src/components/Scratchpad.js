import React, { useState } from 'react';
import '../styles/scratchpad.css'

const Scratchpad = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const [content, setContent] = useState("");

  const handleContent = (event) => {
    setContent(event.target.value);
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
      setPosition({
        x: event.clientX - initialPosition.x,
        y: event.clientY - initialPosition.y
      });
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
        //value={text}
        onChange={handleContent}
        placeholder="Enter text..."
        style={{ width: '400px', height: '300px' }}
      />
      {/* Scratchpad content */}
    </div>
  );
};

export default Scratchpad;
