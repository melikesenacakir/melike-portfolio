import { ArticleCard } from "../../components/articleCard/articleCard";
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";
import { useTranslation } from "react-i18next";

export const Articles = () => {
    const { t } = useTranslation();
    
    return (
        <div className="bg-gradient-to-t from-lightBlue to-darkBlue min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-shrink-0 p-6 md:p-8 text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-poppins mb-4 animate-pulse">
                    {t('navbar.articles')}
                </h1>
                <p className="text-gray-300 font-poppins text-lg max-w-4xl mx-auto">
                    {t('article.description')}
                </p>
            </div>
            <div className="flex-1 p-4 md:p-6 flex items-start justify-center">
                <div className="w-full max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <ArticleCard article="0" delay={0.2} />
                        <ArticleCard article="1" delay={0.4} />
                        <ArticleCard article="2" delay={0.6} />
                        <ArticleCard article="3" delay={0.8} />
                        <ArticleCard article="4" delay={1.0} />
                        <ArticleCard article="5" delay={1.2} />
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}