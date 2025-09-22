import { useTranslation } from "react-i18next";

export const SkillsCard = ({skill}) => {
    const {t} = useTranslation();
    
    const skillName = t(`skills.0.${skill}.name`);
    const skillLogo = t(`skills.0.${skill}.logo`);
    
    return (
        <div className="flex flex-col items-center p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300">
            <img 
                src={skillLogo} 
                alt={skillName} 
                className="w-24 h-24 object-contain mb-3"
            />
            <p className="text-white text-sm font-poppins text-center">{skillName}</p>
        </div>
    );
}