import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";

export const About = () => {
    return (
        <div className="bg-gradient-to-t from-lightBlue to-darkBlue h-screen flex flex-col">
            <Navbar />
            About
            <Footer />
        </div>
    );
};