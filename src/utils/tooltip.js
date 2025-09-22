import { useTranslation } from "react-i18next";


export const ShowTooltip = (message) => {
    const { t } = useTranslation();
    return (
        <div className='bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap select-text'>
              {t(message) ? t(message) : message}
        </div>
    );
}
