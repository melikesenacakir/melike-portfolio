import { Card } from "../../components/card/card";
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";


export const Articles = () => {
    return (
            <div className="bg-gradient-to-t from-lightBlue to-darkBlue min-h-screen flex flex-col">
                <Navbar />
                <div className="flex flex-1 items-center grid grid-cols-2 mx-auto">
                    <Card card="0" type='articles'/>
                    <Card card="1" type='articles'/>
                    <Card card="2" type='articles'/>
                    <Card card="3" type='articles'/>
                    <Card card="4" type='articles'/>
                    <Card card="5" type='articles'/>
                </div>
                <Footer />
            </div>
        );
}