import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const NotFound = () => {
    const { t } = useTranslation();
    
    return (
        <div className="bg-gradient-to-t from-lightBlue to-darkBlue h-screen flex flex-col select-none">
            <div className="flex flex-1 flex-col items-center justify-center text-center space-y-6 p-4">
                <h1 className="text-9xl font-extrabold text-cuteBlue font-poppins animate-pulse mb-4">{t('notFound.message')}</h1>
                <p className="text-gray-400 font-poppins text-lg max-w-xl">
                    {t('notFound.description')}
                </p>
                <Link 
                    to="/" 
                    className="mt-8 px-8 py-3 bg-cuteBlue text-white text-lg font-poppins font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                    {t('notFound.homeLink')}
                </Link>
            </div>
        </div>
    );
}

export default NotFound;