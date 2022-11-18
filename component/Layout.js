import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
    return (
        <div className="">
            <Header />
            {children}
            <Footer />
        </div>
    );
}
