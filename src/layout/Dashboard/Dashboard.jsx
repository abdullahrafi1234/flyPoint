import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const Dashboard = () => {
    return (
        <div>
            {/* sidebar */}
            <div>
                <Sidebar></Sidebar>
            </div>

            {/* others outlet components */}
            <div className="flex-1 px-24 py-6">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Dashboard;