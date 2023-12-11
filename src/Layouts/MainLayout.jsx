import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="text-white">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;