import { Outlet } from "react-router-dom";
import NavBar from "../Components/BoxContainer/NavBar/NavBar";

const MainLayout = () => {
    return (
        <div className="text-white">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;