'use client';

import useDarkMode from '@/hooks/useDarkMode'; 
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

export default function ThemeToggle() {
  const [theme, toggleTheme] = useDarkMode();

  return ( 

        <button
          onClick={toggleTheme}
          className="p-2 bg-black dark:bg-gray-700 rounded"
        >
            {theme === 'dark' ? (
            <SunIcon className="h-6 w-6 text-white" />
          ) : (
            <MoonIcon className="h-6 w-6 text-white" />
          )}
         
        </button> 



  );
}
