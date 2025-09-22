import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";
import { Card } from "../../components/card/card";

export const Projects = () => {
    return (
        <div className="bg-gradient-to-t from-lightBlue to-darkBlue min-h-screen flex flex-col">
            <Navbar />
             <div className="flex flex-1 items-center grid grid-cols-2 mx-auto">
                <Card card="0" type='projects'/>
                <Card card="1" type='projects'/>
                <Card card="2" type='projects'/>
                <Card card="3" type='projects'/>
             </div>
            <Footer />
        </div>
    );
};