import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center p-6 text-gray-700 dark:text-gray-300">
      <p>&copy; 2025 Սովորական Բիզնես / Անուն. Բոլոր իրավունքները պաշտպանված են.</p>
      <div className="mt-2 flex justify-center gap-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          Facebook
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          Twitter
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
