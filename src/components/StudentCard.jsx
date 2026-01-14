// src/components/StudentCard.jsx
import React from "react";

const StudentCard = ({
  name,
  rollNumber,
  batch,
  favoriteLanguage,
  theme = "light",
}) => {
  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-gray-800 text-white border-gray-700"
          : "bg-white text-gray-900 border-gray-200"
      } rounded-xl shadow-md overflow-hidden border hover:shadow-lg transition-shadow duration-300 max-w-sm m-4`}
    >
      <div className="p-6">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-2">
          Student Card
        </div>
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <div
          className={`text-base ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          } space-y-2`}
        >
          <p>
            <span className="font-semibold">Roll No:</span> {rollNumber}
          </p>
          <p>
            <span className="font-semibold">Batch:</span> {batch}
          </p>
          <p>
            <span className="font-semibold">Favorite Language:</span>{" "}
            <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full uppercase tracking-wide font-semibold">
              {favoriteLanguage}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
