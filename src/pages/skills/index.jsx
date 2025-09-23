import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";
import { SkillsCard } from "../../components/skillsCard/skills";

export const Skills = () => {
    return (
    <div className="relative bg-gradient-to-t from-lightBlue to-darkBlue min-h-screen h-full w-full flex flex-col">
        <div 
            className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat blur-sm"
            style={{
                backgroundImage: "url('/images/code_back.gif')"
            }}
        ></div>
        <div className="relative z-10 flex flex-col min-h-screen w-full">
            <Navbar />
            <div className="flex flex-1 items-center grid grid-cols-2 sm:grid-cols-6 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4 gap-6 mx-auto p-4 w-full">
                <SkillsCard skill="angular" />
                <SkillsCard skill="react" />
                <SkillsCard skill="php" />
                <SkillsCard skill="go" />
                <SkillsCard skill="linux" />
                <SkillsCard skill="dotnetcore" />
                <SkillsCard skill="c" />
                <SkillsCard skill="docker" />
            </div>
        <Footer />
        </div>
    </div>
    );
};