import useEth from "../contexts/EthContext/useEth";
import NoticeNoArtifact from "../components/Demo/NoticeNoArtifact";
import NoticeWrongNetwork from "../components/Demo/NoticeWrongNetwork";
import { useState, useEffect } from "react";
import { Typography, List, ListItem, ListItemText, Divider, Button, TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function CampaignsList() {
    const [campaigns, setCampaigns] = useState([]);
    const { state } = useEth();
    let navigate = useNavigate();

    useEffect(() => {
        const getCampaigns = async () => {
            if (state.contract) { 
                setCampaigns(await state?.contract?.methods?.getCampaigns().call({ from: state.accounts[0] }));
            }
        }
        getCampaigns();
       }, [state]);

    const Demo = styled('div')(({ theme }) => ({
        backgroundColor: "#52b5f2",
      }));

    const campaignList = (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Link to="/promoCode"> <Button variant="contained" color="primary">Apply for a influencer promo code.</Button></Link>
            <Demo>
                <List >
                {campaigns.map((campaign, index) => (   
                <ListItem style={{ display: "flex", flexDirection: "row" }}>
                    <ListItemText
                    primary={campaign.name}
                    secondary={campaign.description ? campaign.description : null}
                    />
                    <Button variant="contained" color="primary" onClick={(e) => navigate("/campaigns/" + campaign.id)}>Apply</Button>
                </ListItem>
                ))}
                </List>
            </Demo>
        </div>
    );

    return (
        <div className="campaignsForm">
            {
            !state.artifact ? <NoticeNoArtifact /> :
                !state.contract ? <NoticeWrongNetwork /> :
                campaignList
            }
        </div>
      );
}