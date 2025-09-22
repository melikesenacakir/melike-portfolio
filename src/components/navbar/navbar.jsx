import { useTranslation } from 'react-i18next';
import { LanguageSelector } from '../language/language';
import { NavLink, useLocation } from 'react-router-dom';


export const Navbar = () => {
      const { t } = useTranslation();
      const location = useLocation();

  return (
    <div className="p-4 flex flex-row border-white shadow-3xl bg-darkBlue w-full select-none">
        <div className="flex text-white font-poppins font-extrabold text-2xl justify-start items-center drop-shadow-[0_0_10px_#ffffff]">
            <NavLink to="/">{t("navbar.icon")}{location.pathname}</NavLink> 
        </div>
        <div className="flex flex-row justify-end w-full space-x-12 items-center">
            <ul className="flex space-x-12 font-poppins text-xl cursor-pointer">
                <li>
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) => 
                            isActive ? "font-extrabold text-white" : "text-white hover:font-bold"
                        }
                        >
                        {t("navbar.about")}
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/articles" 
                    className={({ isActive }) =>
                         isActive ? "font-extrabold text-white" : "text-white hover:font-bold"
                    }
                    >
                    {t("navbar.articles")}
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                    to="/projects" 
                    className={({ isActive }) =>
                         isActive ? "font-extrabold text-white" : "text-white hover:font-bold"
                    }
                    >
                    {t("navbar.projects")}
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                    to="/skills" 
                    className={({ isActive }) =>
                         isActive ? "font-extrabold text-white" : "text-white hover:font-bold"
                    }
                    >
                    {t("navbar.skills")}
                    </NavLink>
                </li>
            </ul>
            <LanguageSelector />
        </div>
    </div>
  );
}