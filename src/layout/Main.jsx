import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "../contexts/theme";
import { useEffect, useState } from "react";


const Main = () => {
    const [themeMode, setThemeMode] = useState('light');

    const darkTheme = () => {
        setThemeMode('dark');
    }

    const lightTheme = () => {
        setThemeMode('light');
    }

    useEffect(() => {
        document.querySelector('html').classList.remove('dark','light');
        document.querySelector('html').classList.add(themeMode);

    },[themeMode])
    return (
        <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
        <div className="container mx-auto dark:bg-neutral-900">
            <Navbar></Navbar>
            <Outlet/>
        </div>
        </ThemeProvider>
    );
};

export default Main;