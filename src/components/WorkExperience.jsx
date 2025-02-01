import { Briefcase } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

function WorkExperienceItem({ title, duration, company, technologies, description }) {
   return (
      <section className="mb-8">
         <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold">&bull; {title}</h1>
            <p className="text-sm">{duration}</p>
         </div>
         <p>{company}</p>

         <ul className="flex gap-2 flex-wrap">
            {technologies.map((tech, index) => (
               <li key={index} className="bg-gray-100 dark:bg-zinc-800 rounded p-1">{tech}</li>
            ))}
         </ul>

         <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
      </section>
   );
}

function WorkExperience() {
   const { t } = useTranslation();

   const experiences = [
      {
         title: t("experience_1"),
         duration: t("duration_exp_1"),
         company: t("company_1"),
         technologies: ["ReactJS", "TailwindCSS", "Git"],
         description: t("description_exp_1"),
      },
      {
         title: t("experience_2"),
         duration: t("duration_exp_2"),
         company: t("company_2"),
         technologies: ["ReactJS", "TailwindCSS", "Git", "PostgreSQL", "NodeJS", "Express"],
         description: t("description_exp_2"),
      },
      {
         title: t("experience_3"),
         duration: t("duration_exp_3"),
         company: t("company_3"),
         technologies: ["NodeJS", "Hono", "Cron", "NodeMailer", "Git", "SOAP", "Docker"],
         description: t("description_exp_3")
      },
      {
         title: t("experience_4"),
         duration: t("duration_exp_4"),
         company: t("company_4"),
         technologies: ["React Native", "Expo", "NativeWind"],
         description: t("description_exp_4")
      }
   ];

   return (
      <section className="mb-12 animate-fade-left animate-duration-500 animate-delay-1000 animate-ease-linear">
         <div className="flex items-center mb-6">
            <h1 className="text-2xl font-bold flex items-center gap-2">
               <Briefcase />
               <p>{t("work_experience")}</p>
            </h1>
            <div className="flex-1 border-t ml-4" />
         </div>

         {experiences.map((experience, index) => (
            <WorkExperienceItem key={index} {...experience} />
         ))}
      </section>
   );
}

export default WorkExperience;
