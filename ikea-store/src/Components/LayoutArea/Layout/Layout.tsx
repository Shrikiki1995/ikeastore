import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Manu from "../Manu/Manu";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <Header />
            <Manu />
            <Routing />
            <Footer />
        </div>
    );
}

export default Layout;
