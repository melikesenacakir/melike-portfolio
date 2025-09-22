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
            <div className="relative z-10">
                <Navbar />
                <div className="flex flex-col p-6 w-fit mx-auto h-screen gap-6 items-center bg-gradient-to-t from-lightBlue to-darkBlue shadow-2xl">
                    <div className="flex flex-row gap-6 items-center justify-center space-x-6">
                    <img src="/images/me.gif" alt="Profile" className="w-24 h-24 rounded-[20px] border-white shadow-2xl" />
                    <div className="max-w-xl flex flex-col">
                        <h1 className="text-6xl text-cuteBlue font-bold font-poppins mb-4">{t('about.heading')}</h1>
                    </div>
                    </div>
                    <div className="max-w-2xl">
                        <p className="font-poppins text-xl">{t('about.content')}</p>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
};