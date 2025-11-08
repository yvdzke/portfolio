import React from "react";

import phpIcon from "../assets/icons/php.png";
import jsIcon from "../assets/icons/js.png";
import reactIcon from "../assets/icons/react.png";
import dbIcon from "../assets/icons/db.png";
import nodeIcon from "../assets/icons/node.png";
import nextjsIcon from "../assets/icons/nextjs.png";
import laravelIcon from "../assets/icons/laravel.png";
import tailwindIcon from "../assets/icons/tailwind.png";
import bootstrapIcon from "../assets/icons/bootstrap.png";
import gitIcon from "../assets/icons/git.png";
import mysqlIcon from "../assets/icons/mysql.png";

const skills = [
  {
    name: "Frameworks",
    icons: [
      { img: nextjsIcon, label: "NextJS" },
      { img: laravelIcon, label: "Laravel" },
    ],
    level: 87,
  },
  {
    name: "Design",
    icons: [
      { img: tailwindIcon, label: "Tailwind" },
      { img: bootstrapIcon, label: "Bootstrap" },
    ],
    level: 79,
  },
  {
    name: "Language",
    icons: [
      { img: jsIcon, label: "JavaScript" },
      { img: phpIcon, label: "PHP" },
    ],
    level: 80,
  },
  {
    name: "Database",
    icons: [
      { img: dbIcon, label: "PostgreSQL" },
      { img: mysqlIcon, label: "MySQL" },
    ],
    level: 75,
  },
  {
    name: "Tools",
    icons: [
      { img: nodeIcon, label: "NodeJs" },
      { img: gitIcon, label: "Git" },
      { img: reactIcon, label: "ReactJs" },
    ],
    level: 75,
  },
];

const SkillsSection = () => {
  return (
    <section className="bg-[#11111100] text-white text-center py-20 px-5 relative">
      {/* Subtitle */}
      <p className="italic text-[0.9rem] text-white mb-12">
        My Technical Skills:
      </p>

      {/* Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-10 max-w-[800px] mx-auto">
        {skills.map((skill, index) => (
          <div className="relative text-left" key={index}>
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-base">{skill.name}</span>

              <div className="flex gap-3 items-center flex-wrap">
                {skill.icons.map((icon, i) => (
                  <div
                    className="flex flex-col items-center text-center"
                    key={i}
                  >
                    <img
                      src={icon.img}
                      alt={icon.label}
                      className="w-8 h-8 object-contain transition-transform duration-200 ease-in-out hover:scale-125"
                    />
                    <span className="mt-1 text-[0.75rem] text-white">
                      {icon.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Line + Dot */}
            <div className="relative h-[2px] bg-[#ccc] w-full">
              <div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 border-2 border-black bg-[#41b5a1] rounded-full shadow-[2px_2px_3px_rgba(0,0,0,0.2)] transition-all duration-500"
                style={{
                  left: `${skill.level}%`,
                  transform: "translate(-50%, -50%)",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
