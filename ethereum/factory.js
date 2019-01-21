import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xaFe6b4b600bde52dd9Fe0182031982d262685a6E"
);

export default instance;
