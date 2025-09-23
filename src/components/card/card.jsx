import { useTranslation } from "react-i18next";
import LaunchIcon from '@mui/icons-material/Launch';

export const Card = ({card, type}) => {
    const {t} = useTranslation();
    return (
        <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6 m-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-opacity-30 border border-white border-opacity-20 min-h-[200px] xl:min-h-[250px]">
            <div className="flex flex-col sm:flex-row gap-6 h-full">
                <div className="flex-shrink-0 flex justify-center sm:justify-start">
                    {
                        t(`${type}.${card}.img`) === "none" ?
                        <img className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-lg object-cover shadow-md" src='/images/project.gif' alt="card-image" />
                         :<img className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-lg object-cover shadow-md" src={t(`${type}.${card}.img`)} alt="card-image" />
                    }
                </div>
                <div className="flex flex-col justify-between flex-1 min-w-0">
                    <div className="space-y-3">
                        <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white font-semibold font-poppins transition-all duration-300 transform hover:scale-105 cursor-pointer">
                            {t(`${type}.${card}.name`)}
                        </h3>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-300 font-light font-poppins leading-relaxed">
                            {t(`${type}.${card}.description`)}
                        </p>
                    </div>
                    <div className="flex justify-end pt-4">
                        <button 
                            onClick={() => window.open(t(`${type}.${card}.link`), '_blank')}
                            className="flex items-center space-x-2 text-cuteBlue hover:text-white transition-colors duration-300 text-base lg:text-lg font-medium group">
                            {t('project.view')}
                            <LaunchIcon className="w-5 h-5 lg:w-6 lg:h-6 group-hover:transform group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}