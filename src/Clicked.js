import React, { useState } from 'react';

function Clicked() {
  const [count, setCount] = useState(0); // useState to track 'count'

  const handleClick = () => {
    setCount(count + 1); // Updates the state and triggers a re-render
  };

  return (
    <div>
      <p>Count: {count}</p> {/* Updated value will be reflected here */}
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

// Export the component to use it in other files
export default Clicked;
