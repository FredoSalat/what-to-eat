import React from "react";

export default function Footer() {
  return (
    <footer className="text-center mb-4 text-gray-500 bottom-0 w-full mt-6">
      <small>
        &copy; {new Date().getFullYear()} What to eat!?. All rights reserved
      </small>
    </footer>
  );
}
