import React from "react";
import Image from "next/image";
const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md p-6 text-center">
      <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
        Սովորական Բիզնես / Անուն
      </h1>
      <p className="text-gray-600 dark:text-gray-300">
        Պարզ, ժամանակակից, պրոֆեսիոնալ 1-էջանի վեբսայթ
      </p>
      <Image
        src="/cafe.png"
        alt="Hero Image"
        className="mx-auto mt-4 rounded-lg max-w-full h-auto"
        width={600}
        height={400}
      />
    </header>
  );
};

export default Header;
