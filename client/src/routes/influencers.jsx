import * as React from 'react';
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { useState } from "react";
import {
    useParams,
    useNavigate,
    useLocation,
  } from "react-router-dom";
import useEth from "../contexts/EthContext/useEth";
import web3 from "web3";
import { getInfluencers } from "../data";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import NoticeNoArtifact from "../components/Demo/NoticeNoArtifact";
import NoticeWrongNetwork from "../components/Demo/NoticeWrongNetwork";

export default function Influencers() {
  let influencers = getInfluencers();
  let navigate = useNavigate();
  let location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();
  const [ values, setValues ] = useState({
        funds: 0
    });
    const { state } = useEth();

    const contract = state.contract;
    const account = state.accounts[0];

    const getInfluencerFunds = async (wallet_address) => {
        const funds = await contract.methods.getInfluencerFunds(wallet_address).call({ from: account });
        console.log('funds: ', funds);
        setValues({ ...values, balance: funds["0"] });
        navigate("/influencers/" + wallet_address, { state: { funds: funds["0"], id: 1 } });
    }


  const influencerList = (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {influencers.filter((influencer) => {
                let filter = searchParams.get("filter");
                if (!filter) return true;
                let first_name = influencer.first_name.toLowerCase();
                return first_name.startsWith(filter.toLowerCase());
            }).map((influencer) => (
            /*<NavLink
            style={({ isActive }) => {
                return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
                };
            }}
            to={`/influencers/${influencer.wallet_address}`}
            key={influencer.wallet_address}
            >
            {influencer.first_name}
            </NavLink>*/
                <ListItem 
                align-items="flex-start"
                onClick={() => {
                    getInfluencerFunds(influencer.wallet_address);
                  }}
                >
                    <ListItemAvatar>
                        <Avatar alt={influencer.first_name + " " + influencer.last_name} src={influencer.profile_picture} />
                    </ListItemAvatar>
                    <ListItemText
                        primary= { "instagram followers: " + influencer.instagram_followers }
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {influencer.first_name + " " + influencer.last_name}
                            </Typography>
                            {influencer.email}
                            </React.Fragment>
                        }
                        />
                </ListItem>
            ))}
        </List>
      </nav>
      <Outlet />
    </div>
  );

  return (
    <div className="influencerList">
        {
        !state.artifact ? <NoticeNoArtifact /> :
            !state.contract ? <NoticeWrongNetwork /> :
            influencerList
        }
    </div>
  );
}