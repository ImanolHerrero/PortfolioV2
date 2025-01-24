import { Translate } from "@phosphor-icons/react";
import { useTranslation } from 'react-i18next';

function LanguageSwitch() {
      const { i18n } = useTranslation();

      const changeLanguage = (lng) => {
            i18n.changeLanguage(lng);
      };

      return (
            <div className="flex items-center gap-2">
                  <Translate />
                  <button onClick={() => changeLanguage('en')}>ENG</button>
                  <span> / </span>
                  <button onClick={() => changeLanguage('es')}>ESP</button>
            </div>
      );
}

export default LanguageSwitch;
