// app/ClientComponent.js
'use client'; // This directive marks it as a Client Component

import { useState } from 'react';

export default function ClientComponent({ initialCount }) {
  // Client-side state
  const [count, setCount] = useState(initialCount);
  const [inputValue, setInputValue] = useState('');

  // Client-side handlers
  const handleIncrement = () => setCount(count + 1);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Client-side input: ${inputValue}`);
    setInputValue('');
  };

  return (
    <div className="mt-6 p-4 border rounded">
      <h2 className="text-xl font-semibold">Client-Side Interactive Section</h2>
      
      <div className="mt-4 flex items-center gap-4">
        <button 
          onClick={handleIncrement}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Count: {count}
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type something..."
          className="p-2 border rounded"
        />
        <button 
          type="submit" 
          className="ml-2 px-4 py-2 bg-green-600 text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
