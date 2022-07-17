import {
    useParams,
    useNavigate,
    useLocation,
  } from "react-router-dom";
import { getInfluencer, deleteInfluencer } from "../data";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useState } from "react";
import useEth from "../contexts/EthContext/useEth";
import NoticeNoArtifact from "../components/Demo/NoticeNoArtifact";
import NoticeWrongNetwork from "../components/Demo/NoticeWrongNetwork";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';

import SendIcon from '@mui/icons-material/Send';



export default function Influencer() {
    let navigate = useNavigate();
    let location = useLocation();
    console.log('location: ', location);
    const { state } = useEth();
    let params = useParams();
    let influencer = getInfluencer(params.wallet_address, 10);

    const [values, setValues] = useState({
        amount: '',
        balance: 'Click to load balance',
        fundInfluencerAmount: '',
        influencerAddress: '',
      });


  const handleChange = (prop, e) => setValues({ ...values, [prop]: e.target.value})
  

  const contract = state.contract;

  const callFundInfluencer = async () => {
    await contract.methods.fundInfluencer(values.fundInfluencerAmount, influencer.wallet_address).send({ from: state.accounts[0] });
  }

const InfluencerCard = (
    <main>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={influencer.profile_picture}
          alt={influencer.first_name + " " + influencer.last_name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {influencer.first_name + " " + influencer.last_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Currently available influencer funds for this campaign: Eth {location?.state?.funds}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Wallet address: {influencer.wallet_address}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Box
        component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            onChange={event => handleChange('fundInfluencerAmount', event)}
            startAdornment={<InputAdornment position="start">Eth</InputAdornment>}
            label="Fund Influencer"
          />
          </FormControl>
          <Button 
          variant="contained"
          endIcon={<SendIcon />}
          onClick={callFundInfluencer}
          >
            fund influencer
          </Button>
        </Box>
      </CardActions>
    </Card>
    </main>
);


return (
    <div className="influencerCard">
        {
        !state.artifact ? <NoticeNoArtifact /> :
            !state.contract ? <NoticeWrongNetwork /> :
            InfluencerCard
        }
    </div>
  );
}
  