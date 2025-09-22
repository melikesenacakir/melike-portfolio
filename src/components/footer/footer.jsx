import { useTranslation } from "react-i18next";

export const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className="bg-darkBlue text-white text-center p-4 mt-auto">
            &copy; {new Date().getFullYear()} {t("footer.text")}
        </div>
    );
};