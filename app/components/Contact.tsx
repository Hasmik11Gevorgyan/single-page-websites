import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="p-8 text-center bg-gray-50 dark:bg-gray-800">
      <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
        Կապ
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Դու կարող ես ինձ գրել էլ. փոստով կամ հետևել սոցիալական հղումներով:
      </p>
      <a
        href="mailto:example@email.com"
        className="text-blue-500 dark:text-blue-400 underline hover:text-blue-600 dark:hover:text-blue-300"
      >
        example@email.com
      </a>

      {/* Եթե ուզում ես, կարող ես ավելացնել form */}
      <form className="mt-6 max-w-md mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Անուն"
          className="p-2 border rounded dark:bg-gray-700 dark:text-white"
        />
        <input
          type="email"
          placeholder="Էլ. փոստ"
          className="p-2 border rounded dark:bg-gray-700 dark:text-white"
        />
        <textarea
          placeholder="Հաղորդագրություն"
          className="p-2 border rounded dark:bg-gray-700 dark:text-white"
          rows={4}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors"
        >
          Ուղարկել
        </button>
      </form>
    </section>
  );
};

export default Contact;
