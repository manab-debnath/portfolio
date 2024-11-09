import React from 'react';
import { Code2 } from 'lucide-react';
import { skills } from '../data';

const Skills = () => {
  return (
    <section id="skills" className="py-20 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white dark:bg-gray-900 rounded-xl shadow-light dark:shadow-dark p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                <Code2 className="text-blue-600" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 dark:text-gray-300 dark:bg-blue-700 dark:text-blue-100 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;