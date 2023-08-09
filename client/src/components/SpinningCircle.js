import React from 'react';
import Button from '@mui/material/Button';
import '../styles/SpinningCircle.css';

function SpinningCircle() {
  return (
    <div className="spinning-circle-container">
      <div className="spinning-circle">
        <Button
          variant="outlined"
          color="primary"
          size="large"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            borderColor: 'navy',
            color: 'navy',
            borderRadius: '20px',
            width: '200px',
            height: '50px'
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default SpinningCircle;
