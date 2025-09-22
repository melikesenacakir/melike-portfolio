import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";
import { ProjectCard } from "../../components/projectCard/project";

export const Projects = () => {
    return (
        <div className="bg-gradient-to-t from-lightBlue to-darkBlue min-h-screen flex flex-col">
            <Navbar />
             <div className="flex flex-1 items-center grid grid-cols-2 mx-auto">
                <ProjectCard project="0"/>
                <ProjectCard project="1"/>
                <ProjectCard project="2"/>
                <ProjectCard project="3"/>
             </div>
            <Footer />
        </div>
    );
};