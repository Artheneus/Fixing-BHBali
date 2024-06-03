import React from "react";
import { Link } from "react-router-dom";
import cancel from "../assets/cancel.png";

// function CircleCheckIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/1999/xlink"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <path d="m9 12 2 2 4-4" />
//     </svg>
//   );
// }

export default function Cancel() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col items-center justify-center flex-grow text-center p-4 md:p-6">
        {/* <CircleCheckIcon className="h-16 w-16 text-green-500" /> */}
        <div className="h-16 w-16">
          <img src={cancel} alt="" />
        </div>
        <h1 className="mt-4 text-2xl font-semibold">Payment Cancelled</h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400 w-[600px]">
          Sorry for your inconvinience, hoping to see you purchasing any items
          in the future
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center h-10 px-4 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Return to Homepage
        </Link>
      </main>
      <footer className="flex items-center justify-center h-14 border-t">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; 2024 Bali Awakening Zone. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
