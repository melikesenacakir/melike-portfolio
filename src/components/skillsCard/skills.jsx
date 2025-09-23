import { useTranslation } from "react-i18next";

export const SkillsCard = ({skill}) => {
    const {t} = useTranslation();
    
    const skillName = t(`skills.0.${skill}.name`);
    const skillLogo = t(`skills.0.${skill}.logo`);
    
    return (
        <div className="flex flex-col items-center p-3 md:p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300 hover:scale-105 w-full min-w-[120px] max-w-[200px] mx-auto">
            <img 
                src={skillLogo} 
                alt={skillName} 
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain mb-2 md:mb-3"
            />
            <p className="text-white text-xs md:text-sm font-poppins text-center ">{skillName}</p>
        </div>
    );
}