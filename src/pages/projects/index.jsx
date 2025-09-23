import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";
import { Card } from "../../components/card/card";

export const Projects = () => {
    return (
        <div className="bg-gradient-to-t from-lightBlue to-darkBlue min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 p-4 md:p-6 flex items-center justify-center">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 max-w-7xl w-full">
                    <Card card="0" type='projects'/>
                    <Card card="1" type='projects'/>
                    <Card card="2" type='projects'/>
                    <Card card="3" type='projects'/>
                </div>
            </div>
            <Footer />
        </div>
    );
};