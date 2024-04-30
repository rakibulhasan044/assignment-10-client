import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "../contexts/theme";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Toaster } from 'react-hot-toast'


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
        <div className="container mx-auto dark:bg-gradient-to-r from-[#3D155D] to-[#1F0D31] dark:text-white">
            <Navbar></Navbar>
            <Outlet/>
            <Footer/>
            <Toaster/>
        </div>
        </ThemeProvider>
    );
};

export default Main;