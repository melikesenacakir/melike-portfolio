import { useTranslation } from "react-i18next";

export const ArticleCard = ({ article, delay = 0 }) => {
    const { t } = useTranslation();
    
    return (
        <div 
            className="bg-white bg-opacity-20 backdrop-blur-md rounded-r-[20px] p-4 md:p-6 hover:bg-opacity-30 transition-all duration-500 cursor-pointer opacity-0 animate-fadeInUp w-full border-l-4 border-cuteBlue"
            style={{ 
                animationDelay: `${delay}s`,
                animationFillMode: 'forwards'
            }}
            onClick={() => window.open(t(`articles.${article}.link`), '_blank')}
        >
            <div className="flex flex-col space-y-2 justify-start">
                <h3 className="text-white font-poppins font-semibold text-base md:text-lg">
                    {t(`articles.${article}.name`)}
                </h3>
                <p className="text-gray-300 font-poppins text-sm leading-relaxed">
                    {t(`articles.${article}.description`)}
                </p>
                <div className="flex justify-end pt-2">
                    <span className="text-cuteBlue font-poppins text-xs md:text-sm font-medium hover:text-white transition-colors duration-300">
                        {t('read')}
                    </span>
                </div>
            </div>
        </div>
    );
}