import React from 'react';

const Spinner = () => {
  const spinnerStyle = {
    width: '70px', 
    height: '70px', 
    borderRadius: '50%',
    background: '#766DF4',
    WebkitMask: 'radial-gradient(circle closest-side at 50% 40%, #0000 94%, #000)',
    transformOrigin: '50% 40%',
    animation: 'spin 1s infinite linear',
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div style={spinnerStyle}></div>
    </div>
  );
}

export default Spinner;
