import { Briefcase } from "@phosphor-icons/react";
import { useTranslation } from 'react-i18next';

function WorkExperience() {
      const { t } = useTranslation();

      return (
            <section className="mb-12 animate-fade-left animate-duration-500 animate-delay-1000 animate-ease-linear">
                  <h1 className="text-2xl font-bold mb-2 flex items-center gap-2 "><Briefcase /> {t('work_experience')}</h1>

                  <section className="mb-8">
                        <div className="flex justify-between items-center">
                              <h1 className="text-lg font-semibold">&bull; {t('frontend_dev')}</h1>
                              <p className="text-sm">{t('duration_frontend')}</p>
                        </div>
                        <p>{t('company_frontend')}</p>

                        <ul className="flex gap-2 flex-wrap">
                              <li className="bg-gray-100 dark:bg-gray-900 rounded p-1">ReactJS</li>
                              <li className="bg-gray-100 dark:bg-gray-900 rounded p-1">TailwindCSS</li>
                              <li className="bg-gray-100 dark:bg-gray-900 rounded p-1">Git</li>
                        </ul>

                        <p className="mt-2 text-gray-700 dark:text-gray-400">
                              {t('description_frontend')}
                        </p>
                  </section>

                  <section>
                        <div className="flex justify-between items-center">
                              <h1 className="text-lg font-semibold">&bull; {t('fullstack_dev')}</h1>
                              <p className="text-sm">{t('duration_fullstack')}</p>
                        </div>
                        <p>{t('company_fullstack')}</p>

                        <ul className="flex gap-2 flex-wrap">
                              <li className="bg-gray-100 dark:bg-gray-900 rounded p-1">ReactJS</li>
                              <li className="bg-gray-100 dark:bg-gray-900 rounded p-1">TailwindCSS</li>
                              <li className="bg-gray-100 dark:bg-gray-900 rounded p-1">Git</li>
                              <li className="bg-gray-100 dark:bg-gray-900 rounded p-1">PostgreSQL</li>
                              <li className="bg-gray-100 dark:bg-gray-900 rounded p-1">NodeJS</li>
                              <li className="bg-gray-100 dark:bg-gray-900 rounded p-1">Express</li>
                        </ul>

                        <p className="mt-2 text-gray-700 dark:text-gray-400">
                              {t('description_fullstack')}
                        </p>
                  </section>
            </section>
      );
}

export default WorkExperience;
