import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="container mx-auto py-6 px-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} CreativeForge. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;