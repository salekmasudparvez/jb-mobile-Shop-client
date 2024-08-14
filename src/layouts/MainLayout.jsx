import { Outlet } from "react-router-dom";
import NavbarCompo from "../pages/shared/navbar/NavbarCompo";
import Footer from "../pages/shared/footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <NavbarCompo></NavbarCompo>
            <div className="commonOutlet">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;