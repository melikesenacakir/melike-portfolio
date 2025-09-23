import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { useTranslation } from "react-i18next";

export const About = () => {
    const { t } = useTranslation();
    return (
        <div className="relative bg-gradient-to-t from-lightBlue to-darkBlue min-h-screen flex flex-col">
            <div 
            className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat blur-sm"
            style={{
                backgroundImage: "url('/images/code_back.gif')"
            }} />
            <div className="relative z-10 min-h-screen flex flex-col">
                <Navbar />
                <div className="flex-1 flex items-center justify-center p-6">
                    <div className="max-w-4xl mx-auto bg-gradient-to-t from-lightBlue to-darkBlue bg-opacity-90 rounded-xl p-8 shadow-2xl">
                        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-8">
                            <img src="/images/me.gif" alt="Profile" className="w-24 h-24 sm:w-32 sm:h-32 rounded-[20px] border-white shadow-2xl flex-shrink-0" />
                            <div className="text-center sm:text-left">
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl text-cuteBlue font-bold font-poppins">{t('about.heading')}</h1>
                            </div>
                        </div>
                        <div className="whitespace-pre-line">
                            <p className="font-poppins text-white text-base sm:text-lg font-light text-center sm:text-left">{t('about.content')}</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
};