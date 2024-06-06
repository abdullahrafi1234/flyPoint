import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <h3>navbar</h3>
            <Outlet></Outlet>
            <h3>footer</h3>
        </div>
    );
};

export default Main;