import { useTranslation } from 'react-i18next';
import { LanguageSelector } from '../language/language';
import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const Navbar = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


    const menuItems = [
        { to: "/about", label: t("navbar.about") },
        { to: "/articles", label: t("navbar.articles") },
        { to: "/projects", label: t("navbar.projects") },
        { to: "/skills", label: t("navbar.skills") }
    ];

    return (
        <div className="p-4 flex flex-row border-white shadow-3xl bg-darkBlue w-full select-none relative">
            <div className="flex text-white font-poppins font-extrabold text-2xl justify-start items-center drop-shadow-[0_0_10px_#ffffff]">
                <NavLink to="/">{t("navbar.icon")}{location.pathname}</NavLink> 
            </div>
            <div className="hidden md:flex flex-row justify-end w-full space-x-12 items-center">
                <ul className="flex space-x-12 font-poppins text-xl cursor-pointer">
                    {menuItems.map((item) => (
                        <li key={item.to}>
                            <NavLink 
                                to={item.to}
                                onClick={toggleMenu}
                                className={({ isActive }) => 
                                    `${isActive ? "font-extrabold text-white" : "text-white hover:font-bold"}`
                                }>
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <LanguageSelector />
            </div>
            <div className="md:hidden flex items-center ml-auto">
                <button onClick={toggleMenu} className="text-white">
                    {isMenuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
                </button>
            </div>
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-darkBlue shadow-lg md:hidden z-50">
                    <ul className="flex flex-col space-y-4 p-4 font-poppins text-xl">
                        {menuItems.map((item) => (
                        <li key={item.to}>
                            <NavLink 
                                to={item.to}
                                onClick={toggleMenu}
                                className={({ isActive }) => 
                                    `${isActive ? "font-extrabold text-white" : "text-white hover:font-bold block py-2"}`
                                }>
                                {item.label}
                            </NavLink>
                        </li>
                        ))}
                        <li className="pt-2">
                            <LanguageSelector />
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}