import { TextField, Grid, Button, Typography } from "@mui/material";
import useEth from "../contexts/EthContext/useEth";
import NoticeNoArtifact from "../components/Demo/NoticeNoArtifact";
import NoticeWrongNetwork from "../components/Demo/NoticeWrongNetwork";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const defaultValues = {
    name: "",
    influencerRewardPercentage: 0,
    description: "",
  };

export default function CampaignsForm() {
    const [formValues, setFormValues] = useState(defaultValues);
    const { state } = useEth();
    let navigate = useNavigate();


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const cancel = async () => {
        navigate("/");
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await state.contract.methods.createCampaign(formValues.name, formValues.influencerRewardPercentage, formValues.description).send({ from: state.accounts[0] });
        navigate("/campaigns");
      };

    const campaignsForm = (
    <form onSubmit={handleSubmit}>
    <Typography variant="h6" gutterBottom>
        Create a new campaign
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Campaign name"
            fullWidth
            variant="standard"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="influencerRewardPercentage"
            name="influencerRewardPercentage"
            label="Influencer reward percentage"
            fullWidth
            type="number"
            value={formValues.influencerRewardPercentage}
            onChange={handleInputChange}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="description"
            name="description"
            label="Description"
            fullWidth
            multiline
            autoComplete="family-name"
            variant="standard"
            value={formValues.description}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <br/>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
        <br/>
        <Button variant="contained" color="secondary" onClick={() => cancel()}>
          Cancel
        </Button>
      </form>
      );

      return (
        <div className="campaignsForm">
            {
            !state.artifact ? <NoticeNoArtifact /> :
                !state.contract ? <NoticeWrongNetwork /> :
                campaignsForm
            }
        </div>
      );
}
