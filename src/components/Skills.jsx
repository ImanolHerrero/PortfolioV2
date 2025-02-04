import React from 'react';
import { Wrench } from "@phosphor-icons/react";
import api from "../icons/api.svg";
import css3 from "../icons/css3.svg";
import docker from "../icons/docker.svg";
import expo from "../icons/expo.svg";
import git from "../icons/git.svg";
import html5 from "../icons/html5.svg";
import javascript from "../icons/javascript.svg";
import nextjs from "../icons/nextjs.svg";
import nodejs from "../icons/nodejs.svg";
import postgresql from "../icons/postgresql.svg";
import reactIcon from "../icons/react.svg";
import tailwind from "../icons/tailwind.svg";
import typescript from "../icons/typescript.svg";
import { useTranslation } from "react-i18next";

const skills = [
   { name: "HTML5", icon: html5 },
   { name: "CSS3", icon: css3 },
   { name: "JavaScript", icon: javascript },
   { name: "TypeScript", icon: typescript },
   { name: "React", icon: reactIcon },
   { name: "Next.js", icon: nextjs },
   { name: "Node.js", icon: nodejs },
   { name: "TailwindCSS", icon: tailwind },
   { name: "Expo", icon: expo },
   { name: "Git", icon: git },
   { name: "Docker", icon: docker },
   { name: "PostgreSQL", icon: postgresql },
   { name: "API", icon: api },
];

function Skills() {
   const { t } = useTranslation();
   return (
      <section className='mb-12'>
         <div className="flex items-center mb-6">
            <h1 className="text-2xl font-bold flex items-center gap-2">
               <Wrench />
               {t("skills")}
            </h1>
            <div className="flex-1 border-t ml-4 " />
         </div>

         <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {skills.map((skill) => (
               <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center border rounded p-2 gap-2"
               >
                  <img
                     src={skill.icon}
                     alt={skill.name}
                     className="w-8 h-8 object-contain dark:invert"
                  />
                  <span className="text-sm text-center">
                     {skill.name}
                  </span>
               </div>
            ))}
         </div>
      </section>
   );
}

export default Skills;
