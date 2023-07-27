import React, {useState} from "react";
import useDarkSide from './useDarkSide';
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Switcher(){
    const [colorTheme, setTheme] = useDarkSide();
    const [darkside, setDarkSide] = useState(colorTheme === 'light' ? true :false);

    const toggleDarkMode = (checked) =>{
        setTheme(colorTheme);
        setDarkSide(checked);
    };
    return(
                  <>
                  <div className="items-center fixed int:top-3 int:right-60 hidden z-[200] int:block tab:top-3 lg:right-8">
                  <DarkModeSwitch
                      checked={darkside}
                      onChange={toggleDarkMode}
                      size={56}
                  />

                  </div>
                  
                  </>
    )
}