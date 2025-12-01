import React from "react";
import Image from "next/image";
const Portfolio: React.FC = () => {
  const projects = [
    { title: "Նախագիծ 1", image: "/1.jpg" },
    { title: "Նախագիծ 2", image: "/2.jpg" },
    { title: "Նախագիծ 3", image: "/table.jpg" },
  ];

  return (
    <section className="p-8 text-center bg-gray-50 dark:bg-gray-800">
      <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white">
        Նախագծեր
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow bg-white dark:bg-gray-900">
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
                width={400}
                height={300}
            />
            <h3 className="text-xl font-semibold mt-2 mb-4 text-gray-900 dark:text-white">
              {project.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
