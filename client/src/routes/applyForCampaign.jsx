import { TextField, Grid, Button, Typography } from "@mui/material";
import useEth from "../contexts/EthContext/useEth";
import NoticeNoArtifact from "../components/Demo/NoticeNoArtifact";
import NoticeWrongNetwork from "../components/Demo/NoticeWrongNetwork";

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const defaultValues = {
    promoCode: "",
  };

export default function ApplyForCampaign() {
    const [formValues, setFormValues] = useState(defaultValues);
    const { state } = useEth();
    let navigate = useNavigate();
    let params = useParams();



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
        const response = await state.contract.methods.applyForCampaign(params.id, formValues.promoCode).send({ from: state.accounts[0] });
        navigate("/campaigns");
      };

    const campaignsForm = (
    <form onSubmit={handleSubmit}>
    <Typography variant="h6" gutterBottom>
        Create PromoCode
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="promoCode"
            name="promoCode"
            label="Promo code"
            fullWidth
            variant="standard"
            value={formValues.promoCode}
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
        <div className="applyForCampaign">
            {
            !state.artifact ? <NoticeNoArtifact /> :
                !state.contract ? <NoticeWrongNetwork /> :
                campaignsForm
            }
        </div>
      );
}
