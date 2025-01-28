import { User } from "@phosphor-icons/react";
import { useTranslation } from 'react-i18next';

function AboutMe() {
      const { t } = useTranslation();

      return (
            <section className="mb-12 animate-fade-left animate-duration-500 animate-delay-700 animate-ease-linear">


                  <h1 className="text-2xl font-bold mb-2 flex items-center gap-2 "><User /> {t('about_me')}</h1>
                  <p className="text-gray-700 dark:text-gray-300">
                        {t('about_me_description')}
                  </p>

            </section>
      );
}

export default AboutMe;
