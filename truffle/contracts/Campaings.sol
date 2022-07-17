// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Campaigns {

    event FundContract(address indexed _from, uint _value);

    event GetInfluencerFunds(address indexed _from);

    event CreateCampaign(uint id, string name, uint influencerRewardPercentage);

    address[] public influencers;

    uint campaignCounter = 0;

    struct CampaignStruct {
        string name;
        uint id;
        uint influencerRewardPercentage;
        string description;
        string[] promoCodes;
    }

    CampaignStruct[] public campaigns;

    mapping (address => uint) public influencerFunds;
    mapping (string => address) public promoCodeToInfluencer;
    uint256 availableCampaignFunds = 0;

    // Private state variable
    address private owner;

     // Defining a constructor   
     constructor() {   
        owner=payable(msg.sender);
    }

    receive() external payable {}

    fallback() external payable {}

    function createCampaign(string memory _name, uint _influencerRewardPercentage, string memory _description) _onlyOwner public payable {
        campaignCounter += 1;
        string[] memory promoCodes = new string[](0);
        campaigns.push(CampaignStruct(
            _name,
            campaignCounter,
            _influencerRewardPercentage,
            _description,
            promoCodes
        ));
        emit CreateCampaign(campaignCounter, _name, _influencerRewardPercentage);
    }

    function getCampaigns() public view returns (CampaignStruct[] memory) {
        return campaigns;
    }

    function getCampaign(uint id) public view returns (CampaignStruct memory) {
        return campaigns[id];
    }

    function getBalance() public view returns (uint) {
        return availableCampaignFunds;
    }

    modifier _onlyOwner {
        require(msg.sender == owner);
        _;
    }

    function getOwnerAddress() public view returns (address) {
        return owner;
    }

    function createPromoCode(string memory _promoCode) public payable returns (bool) {
        if (promoCodeToInfluencer[_promoCode] == address(0)) {
            promoCodeToInfluencer[_promoCode] = msg.sender;
            return true;
        }
        return false;
    }

    function applyForCampaign(uint _campaignId, string memory _promoCode) public payable returns (bool) {
        require(promoCodeToInfluencer[_promoCode] == msg.sender); // so that someone else won't be able to apply for a campaign
        CampaignStruct storage campaign = campaigns[_campaignId];
        campaign.promoCodes.push(_promoCode);
        return true;
    }

    /*function removeInfluencerFunds(address _influencer) _onlyOwner public payable {
        availableCampaignFunds += influencerFunds[_influencer];
        influencerFunds[_influencer] = 0;
    }

    function fundInfluencer(uint amount, address _influencer) _onlyOwner public payable {
        influencerFunds[_influencer] += amount;
        availableCampaignFunds -= amount;
    }

    function applyInfluencer(address _influencer) public payable {
        influencerFunds[_influencer] = 0;
    }
    
    function getInfluencerFunds (address _influencer) public view returns (uint, bool) {
        return (influencerFunds[_influencer], address(0) == _influencer);
    }
    
    // public function to return the amount of donations
    function getFunds() view public returns(uint) {
        return availableCampaignFunds;
    }*/

    //public function to make donate
    /*function fundContract() public payable _onlyOwner {
        emit FundContract(msg.sender, msg.value);
        availableCampaignFunds += msg.value;
    }*/
}
