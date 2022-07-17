import { useState, useRef } from "react";
import useEth from "../../contexts/EthContext/useEth";
import Title from "./Title";
import Cta from "./Cta";
import Contract from "./Contract";
import ContractBtns from "./ContractBtns";
import Desc from "./Desc";
import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';
import web3 from "web3";

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


function Demo() {
  const { state } = useEth();
  const [value, setValue] = useState("?");
  const [values, setValues] = useState({
    amount: '',
    balance: 'Click to load balance',
    fundInfluencerAmount: '',
    influencerAddress: '',
  });
  const [ownerAddress, setOwnerAddress] = useState("?");
  const fundContract = useRef(null)

  const handleChange = (prop, e) => setValues({ ...values, [prop]: e.target.value})
  

  const contract = state.contract;

  const callFundContract = async () => {
    await contract.methods.fundContract().send({ from: state.accounts[0], value: web3.utils.toWei(values.amount, "ether") });
  }

  const callApplyInfluencer = async () => {
    await contract.methods.applyInfluencer(state.accounts[0]).send({ from: state.accounts[0] });
  }

  const callGetInfluencerFunds = async () => {
    const funds = await contract.methods.getInfluencerFunds(state.accounts[0]).call({ from: state.accounts[0] });
    setValues({ ...values, balance: funds["0"] });
  }

  const callFundInfluencer = async () => {
    await contract.methods.fundInfluencer(values.fundInfluencerAmount, values.influencerAddress).send({ from: state.accounts[0] });
  }

  const callRemoveInfluencerFunds = async () => {
    await contract.methods.removeInfluencerFunds(values.influencerAddress).send({ from: state.accounts[0] });
  }

  const demo =
    <>
      <Cta />
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
            onChange={event => handleChange('amount', event)}
            startAdornment={<InputAdornment position="start">Eth</InputAdornment>}
            label="Amount"
          />
          </FormControl>
          <Button 
          variant="contained"
          endIcon={<SendIcon />}
          onClick={callFundContract}
          >
            Fund
          </Button>
        </Box>
        <Box>
          <Button 
          variant="contained"
          endIcon={<SendIcon />}
          onClick={callApplyInfluencer}
          >
            Apply to be an influencer
          </Button>
        </Box>
        <Box>
          Your available balance: {values.balance}
        <Button 
          variant="contained"
          endIcon={<SendIcon />}
          onClick={callGetInfluencerFunds}
          >
            Load your funds.
          </Button>
        </Box>
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

          <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Influencer address</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            onChange={event => handleChange('influencerAddress', event)}
            startAdornment={<InputAdornment position="start">0x</InputAdornment>}
            label="Address"
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
            onChange={event => handleChange('influencerAddress', event)}
            startAdornment={<InputAdornment position="start">0x</InputAdornment>}
            label="Address"
          />
          </FormControl>
          <Button 
          variant="contained"
          endIcon={<SendIcon />}
          onClick={callRemoveInfluencerFunds}
          >
            Remove influencer funds
          </Button>
        </Box>
      <Desc />
    </>;

  return (
    <div className="demo">
      <Title />
      {
        !state.artifact ? <NoticeNoArtifact /> :
          !state.contract ? <NoticeWrongNetwork /> :
            demo
      }
    </div>
  );
}

export default Demo;
