import React from "react";

const Services: React.FC = () => {
  const services = [
    { title: "Ծառայություն 1", description: "Ծառայության պարզ նկարագրություն" },
    { title: "Ծառայություն 2", description: "Ծառայության պարզ նկարագրություն" },
    { title: "Ծառայություն 3", description: "Ծառայության պարզ նկարագրություն" },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 p-8 text-center">
      <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white">
        Ծառայություններ
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow hover:shadow-lg transition-shadow bg-gray-50 dark:bg-gray-800"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {service.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
