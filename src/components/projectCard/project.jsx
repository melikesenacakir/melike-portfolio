import { useTranslation } from "react-i18next";
import LaunchIcon from '@mui/icons-material/Launch';

export const ProjectCard = ({project}) => {
    const {t} = useTranslation();
    return (
        <div className="bg-white bg-opacity-40 bg-gradient-to-t from-navyBlue/42 to-cuteBlue h-48 backdrop-blur-md rounded-lg p-4 m-4 gap-6 flex flex-row">
            <div className="flex flex-row items-center justify-center space-x-4 max-w-md">
                {
                    t(`projects.${project}.img`) === "none" ?
                    <img className="w-32 h-32 rounded-md object-cover flex-shrink-0" src='/images/project.gif' alt="project-image" />
                    : <img className="w-32 h-32 rounded-md object-cover flex-shrink-0" src={t(`projects.${project}.img`)} alt="project-image" />
                }
                <div className="flex flex-col space-y-2 max-w-lg justify-center items-start">
                    <div className="text-lg text-white font-semibold font-poppins">{t(`projects.${project}.name`)}</div>
                    <div className="text-sm text-white font-light font-poppins">{t(`projects.${project}.description`)}</div>
                </div>
            </div>
            <div className="flex flex-1 justify-end ">
                <LaunchIcon className="text-white hover:text-pink-500 cursor-pointer" onClick={() => window.open(t(`projects.${project}.link`), '_blank')} />
            </div>
        </div>
    );
}