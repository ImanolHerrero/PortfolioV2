import { useState, useEffect } from "react";

function ThemeSwitch() {
      const [darkMode, setDarkMode] = useState(false);

      useEffect(() => {
            if (darkMode) {
                  document.body.classList.add('dark');
            } else {
                  document.body.classList.remove('dark');
            }
      }, [darkMode]);

      return (
            <div
                  onClick={() => setDarkMode(!darkMode)}
                  className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-colors duration-500 ${darkMode ? 'bg-slate-900' : ''}`}
            >
                  <div
                        className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-500 ${darkMode ? 'translate-x-6' : ''}`}
                  >
                  </div>
            </div>
      );
}

export default ThemeSwitch;
