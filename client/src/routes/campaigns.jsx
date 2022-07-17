import { Outlet } from "react-router-dom";

export default function Campaigns() {
    return (
        <div style={{ display: "flex" }}>
            <Outlet/>
        </div>
    );
}