import React from "react";

const About: React.FC = () => {
  return (
    <section className="p-8 text-center bg-gray-50 dark:bg-gray-800">
      <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
        Մասին
      </h2>
      <p className="max-w-xl mx-auto text-gray-700 dark:text-gray-300">
        Այստեղ կարող եք ներկայացնել ձեր ծառայությունները, գործունեությունը կամ
        անձնական պրոֆայլը: Օրինակ՝ մենք առաջարկում ենք պարզ, ժամանակակից և
        պրոֆեսիոնալ լուծումներ փոքր բիզնեսների համար, որպեսզի ձեր հաճախորդները
        հեշտությամբ հասկանան առաջարկվող արժեքը:
      </p>
    </section>
  );
};

export default About;
