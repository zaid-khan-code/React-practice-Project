import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Emoji Counter Game
        </h1>

        {/* Emoji Display */}
        <div className="text-center mb-8">
          <div className="text-9xl mb-4">🎉</div>
          <div className="text-6xl font-bold text-indigo-600">{count}</div>
        </div>

        {/* Message when count reaches 10 */}
        {count === 10 && (
          <div className="mb-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 rounded">
            <p className="text-lg font-semibold">
              🎉 Amazing! You reached 10! 🎉
            </p>
          </div>
        )}

        {count > 10 && (
          <div className="mb-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded">
            <p className="text-lg font-semibold">
              ⭐ You're on fire! Count: {count} ⭐
            </p>
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-4 justify-center mb-6">
          <button
            onClick={handleDecrease}
            disabled={count === 0}
            className="bg-red-500 hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Decrease
          </button>

          <button
            onClick={handleIncrease}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Increase
          </button>
        </div>

        {/* Reset Button */}
        <button
          onClick={handleReset}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
        >
          Reset
        </button>

        {/* Counter Status */}
        <div className="mt-6 text-center text-gray-600 text-sm">
          <p>
            Current Count:{" "}
            <span className="font-bold text-indigo-600">{count}</span>
          </p>
          <p className="mt-1">
            {count === 0 && "Start clicking to increase!"}
            {count > 0 && count < 10 && `${10 - count} more to reach 10!`}
            {count >= 10 && "You've reached the goal!"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Count;
