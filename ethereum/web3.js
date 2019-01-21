import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  //we are in the browser *AND* metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  //We are on the server *OR* the user is not using metamask
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/2e965140b3a04e6180399ce3c02184e3"
  );
  console.log(provider);
  web3 = new Web3(provider);
}

export default web3;
