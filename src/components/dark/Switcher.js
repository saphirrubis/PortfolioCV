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
                  <div className="items-center fixed top-3 right-60 tel:block hidden z-[200] tab:top-3 lg:right-8">
                  <DarkModeSwitch
                      checked={darkside}
                      onChange={toggleDarkMode}
                      size={56}
                  />

                  </div>
                  
                  </>
    )
}