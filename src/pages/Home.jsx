import React from "react";
import { Link } from "react-router-dom";

 const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="max-w-3xl w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-4xl font-extrabold text-gray-900">
            Revision Assignments
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Navigate to the individual assignment implementations below
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8">
          {/* Card Assignment */}
          <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <div className="px-4 py-5 sm:p-6 text-center">
              <h1 className="text-3xl font-bold">
                <Link
                  to="/card"
                  className="text-indigo-600 hover:text-indigo-900 hover:underline block p-2"
                >
                  Student Card Assignment
                </Link>
              </h1>
              <p className="mt-1 text-sm text-gray-500">Go to Card Page</p>
            </div>
          </div>

          {/* Counter Assignment */}
          <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <div className="px-4 py-5 sm:p-6 text-center">
              <h1 className="text-2xl font-bold">
                <Link
                  to="/counter"
                  className="text-gray-900 hover:text-indigo-600 block p-2"
                >
                  Counter App
                </Link>
              </h1>
            </div>
          </div>

          {/* Auth Assignment */}
          <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <div className="px-4 py-5 sm:p-6 text-center">
              <h1 className="text-2xl font-bold">
                <Link
                  to="/auth"
                  className="text-gray-900 hover:text-indigo-600 block p-2"
                >
                  Authentication
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home