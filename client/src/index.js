import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
import Influencers from "./routes/influencers";
import Influencer from "./routes/influencer";
import CampaignsForm from './routes/campaignsForm';
import CampaignsList from './routes/campaignsList';
import Campaigns from './routes/campaigns';
import LandingPage from './routes/LandingPage'
import ApplyPromoCode from './routes/applyPromoCode';
import ApplyForCampaign from './routes/applyForCampaign';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}>
    <Route
          index
          element={<LandingPage />}
        />
        <Route path="promoCode" element={<ApplyPromoCode/> }/>
        <Route path="campaigns" element={<Campaigns />}>
          <Route
          index
          element={<CampaignsList />}
        />
          <Route path="new" element={<CampaignsForm />} />
          <Route path=":id" element={<ApplyForCampaign />} />
        </Route>
        <Route path="influencers" element={<Influencers />}>
        <Route
          index
          element={
            <main style={{ padding: "1rem" }}>
              <p>Select influencer </p>
            </main>
          }
        />
          <Route path=":wallet_address" element={<Influencer />}/>
       </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
