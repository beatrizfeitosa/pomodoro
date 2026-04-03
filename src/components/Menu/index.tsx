import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type availableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<availableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as availableThemes) || 'light';
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <nav className={styles.menu}>
        <a
          href='#'
          className={styles.menuLink}
          aria-label='Go to homepage'
          title='Go to homepage'
        >
          <HouseIcon />
        </a>
        <a
          href='#'
          className={styles.menuLink}
          aria-label='History'
          title='History'
        >
          <HistoryIcon />
        </a>
        <a
          href='#'
          className={styles.menuLink}
          aria-label='Settings'
          title='Settings'
        >
          <SettingsIcon />
        </a>
        <a
          href='#'
          className={styles.menuLink}
          aria-label='Change theme'
          title='Change theme'
          onClick={handleThemeChange}
        >
          {nextThemeIcon[theme]}
        </a>
      </nav>
    </>
  );
}
