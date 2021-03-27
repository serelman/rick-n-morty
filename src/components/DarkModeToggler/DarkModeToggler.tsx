import React, { useEffect, useRef, useState } from "react";
import { Switch } from "..";
import themeKey from "../../constants/theme";

export const DarkModeToggler: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const darkTheme = "dark-theme";
  const lightTheme = "light-theme";
  let theme: React.MutableRefObject<string | undefined> = useRef();

  useEffect(() => {
    getTheme()
  }, [])

  const switchTheme = (e: any) => {
    if (theme.current === darkTheme) {
      document.body.classList.replace(darkTheme, lightTheme)
      localStorage.setItem(themeKey, lightTheme)
      theme.current = lightTheme;
      setIsDarkTheme(false);
    } else {
      document.body.classList.replace(lightTheme, darkTheme)
      localStorage.setItem(themeKey, darkTheme)
     theme.current = darkTheme;
      setIsDarkTheme(true);
    }
  }

  const getTheme = () => {
    if(localStorage) {
      theme.current = localStorage.getItem(themeKey) as string;
    }
    if (theme.current === lightTheme || theme.current === darkTheme) {
      document.body.classList.add(theme.current)
      setIsDarkTheme(theme.current === darkTheme)
    } else {
      document.body.classList.add(lightTheme)
      setIsDarkTheme(false);
    }

  }

  return (
      <div className="d-flex align-items-center">
        <Switch onChange={switchTheme} checked={isDarkTheme}/>
      </div>
  )
}
