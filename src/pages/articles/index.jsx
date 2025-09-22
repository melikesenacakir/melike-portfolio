import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";


export const Articles = () => {
    return (
        <div className="bg-gradient-to-t from-lightBlue to-darkBlue h-screen flex flex-col">
            <Navbar />
            Articles
            <Footer />
        </div>
    );
}