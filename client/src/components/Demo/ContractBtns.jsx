import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import web3 from "web3";

function ContractBtns({ setValue, setOwnerAddress }) {
  const { state: { contract, accounts } } = useEth();
  const [inputValue, setInputValue] = useState("");
  const [campaignIndex, setCampaignIndex] = useState(0);
  console.log('contract.methods: ', contract.methods.InfluencerContract);

  const handleInputChange = e => {
    if (/^\d+$|^$/.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };

  const handleIndexChange = e => {
    console.log('e.target.value: ', e.target.value);
    setCampaignIndex(e.target.value);
  }

  const read = async () => {
    console.log("on click")
    const value = await contract.methods.applyToCampaign(3).call({ from: accounts[0] });
    console.log('value: ', value);
    /*const myContracts = []
    value.forEach(contract => { 
      console.log('contract: ', contract);
      console.log('accounts[0]: ', accounts[0]);
      if (contract === accounts[0]) {
        myContracts.push(contract)
      }
    })
    console.log('myContracts: ', myContracts);
    console.log('value: ', value);*/
    setValue(web3.utils.fromWei(value));
  };

  const createCampaign = async () => {
    const response = await contract.methods.createCampaign().send({ from: accounts[0] });
    console.log('response: ', response);
  }

  const getCampaign = async () => {
    const response = await contract.methods.getCampaign(campaignIndex).call({ from: accounts[0] });
    console.log('response: ', response);
  }

  const getOwner = async () => {
    //const value = await contract.methods.getFunds().call({ from: accounts[0] });
    //console.log('value: ', web3.utils.fromWei(value));
    //setOwnerAddress(web3.utils.fromWei(value));

    console.log('accounts: ', accounts);
    console.log('accounts[0]: ', accounts[0]);
    const response = await contract.methods.acceptCampaign(accounts[0], 2, web3.utils.toWei("2", "ether") ).send({ from: accounts[0] });
    //console.log('web3.utils.toWei("2", "ether"): ', web3.utils.toWei("2", "ether"));
    //const response = await contract.methods.transfer(accounts[0], web3.utils.toWei("2", "ether")).send({ from: accounts[0] });
    console.log('response: 123', response);


  }

  const write = async e => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    if (inputValue === "") {
      alert("Please enter a value to write.");
      return;
    }
    const newValue = parseInt(inputValue);
    console.log('newValue: ', newValue, typeof newValue);
    await contract.methods.fundContract().send({ from: accounts[0], value: web3.utils.toWei(newValue.toString(), "ether") });
  };
 
  return (
    <div className="btns">

      <button onClick={read}>
        read()
      </button>

      <button onClick={getOwner}>
      getOwner()
      </button>

    
      <button onClick={createCampaign}>
      createCampaign()
      </button>

      <div onClick={getCampaign} className="input-btn">
        getCampaign(<input
          type="number"
          placeholder="uint"
          value={campaignIndex}
          onChange={handleIndexChange}
        />)
      </div>

      <div onClick={write} className="input-btn">
        write(<input
          type="text"
          placeholder="uint"
          value={inputValue}
          onChange={handleInputChange}
        />)
      </div>

    </div>
  );
}

export default ContractBtns;
