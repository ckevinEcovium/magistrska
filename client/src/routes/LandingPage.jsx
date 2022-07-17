import { Link } from "react-router-dom";
import { Button } from "@mui/material";


const LandingPage = () => {
    return (
        <div>
        <h1>Landing Page</h1>
        <Link to="/campaigns/new"> <Button variant="contained" color="primary">Admin</Button></Link>
        <Link to="/campaigns/"> <Button variant="contained" color="primary">Influencer</Button></Link>

        </div>
    );
    }
export default LandingPage;