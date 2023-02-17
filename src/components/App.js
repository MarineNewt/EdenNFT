import React, { Component } from 'react';
import NavBar from './NavBar.js';
import Home from './Home.js';
import Minter from './Minter.js';
import Garden from './Switcher.js';
import Web3 from 'web3';
import NFTcon from '../contracts/flower.json'
import Lovecon from '../contracts/love.json'
import './App.css';

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
    setInterval(() => {
      this.loadBlockchainData();
    }, 20000);
  }

  async loadWeb3(){
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-ethereum browser detected. Metamask install is recommended.')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3

    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })

    const networkId = await web3.eth.net.getId() 
    let blockNumber = await web3.eth.getBlockNumber()
    this.setState({ blockNumber: blockNumber })
    let block = await web3.eth.getBlock(blockNumber)
    if(block){
      let blocktime = block['timestamp']
      this.setState({ blocktime: blocktime })}
    const NFTContractData = NFTcon.networks[networkId]
    if(NFTContractData) {
      const NFTContract = new web3.eth.Contract(NFTcon.abi, NFTContractData.address)
      this.setState({ NFTContract })
      let NFTContractBalance = await NFTContract.methods.balanceOf(this.state.account).call()
      if(NFTContractBalance){this.setState({ NFTContractBalance })}
      let NFTContractSupply = await NFTContract.methods.supplyMinted().call()
      if(NFTContractSupply){this.setState({ NFTContractSupply: NFTContractSupply })}
      let timetillexp = await NFTContract.methods.exiprationTime().call()
      if(timetillexp){this.setState({ expiration: timetillexp})}
      let usertokens = []
      let userimages = []
      for(var i=0; i < NFTContractBalance; i++){let usertokensnext = await NFTContract.methods.tokenOfOwnerByIndex(this.state.account,i).call()
        usertokens.push(usertokensnext)
        userimages.push(await NFTContract.methods.flowerId(usertokensnext).call())}
      this.setState({userimages})
      console.log(userimages[0])
      this.setState({usertokens})
      this.setState({ loading: false })
      const LovecontractData = Lovecon.networks[networkId]
      const LoveContract = new web3.eth.Contract(Lovecon.abi, LovecontractData.address)
      this.setState({ LoveContract })
      let LoveContractBalance = await LoveContract.methods.balanceOf(this.state.account).call()
      if(LoveContractBalance){this.setState({ LoveContractBalance })}
    }
    else {
      window.alert('Please switch to the Ethereum Network ')
      }

    this.setState({ loading: false })
  }

  loadWallet = () => {
    if (window.ethereum) {
    window.web3 = new Web3(window.ethereum)
    window.ethereum.enable()}
    else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider)}
    else {
    window.alert('Non-ethereum browser detected. Metamask install is recommended.')
    }
    setInterval(() => {
      this.loadBlockchainData();
    }, 15000);}
  mint = () => {
    if(this.state.account === '0x0'){this.loadWallet(); return}
    this.setState({loading: true})
    this.state.NFTContract.methods.Mint().send({ from: this.state.account }).on('transactionHash', (hash) => {
    this.setState({ loading: false })
  })}
  send = (sendto, tokenid) => {
    if(this.state.account === '0x0'){this.loadWallet(); return}
    this.setState({loading: true})
    this.state.NFTContract.methods.safeTransferFrom(this.state.account, sendto, tokenid).send({ from: this.state.account }).on('transactionHash', (hash) => {
    this.setState({ loading: false })
  })}
  switchF = () => {
    this.setState({loading: true})
    this.state.NFTContract.methods.flowerSwitch(this.state.usertokens[this.state.currentToken], this.state.currentSwitch).send({ from: this.state.account }).on('transactionHash', (hash) => {
    this.setState({ loading: false })
  })}
  expirecheck = () => {
    if(this.state.account === '0x0'){this.loadWallet(); return}
    this.setState({loading: true})
    this.state.NFTContract.methods.expireCheck().send({ from: this.state.account }).on('transactionHash', (hash) => {
    this.setState({ loading: false })
  })}
  lookup = (tokenid) => {
    this.setState({loading: true})
    let currentSwitch = tokenid
    this.setState({currentSwitch})
    let currentSwitchImg
    let targetaccount
    let targetLoveBal
    this.state.NFTContract.methods.flowerId(currentSwitch).call().then((res) => {currentSwitchImg = res;
    this.state.NFTContract.methods.ownerOf(currentSwitch).call().then((res) => {targetaccount = res; 
    this.state.LoveContract.methods.balanceOf(targetaccount).call().then((res) => {targetLoveBal = res;
    if(targetLoveBal < 1){currentSwitchImg = 0}
    this.setState({currentSwitchImg})
    })})})
    this.setState({ loading: false })
  }

  page = (pageselect) => {
    this.setState({ pageTier: pageselect})
  }
  section = (sectionselect) => {
    if(sectionselect === 1){sectionselect = this.state.sectionTier + 1}
    if(sectionselect === 0){sectionselect = this.state.sectionTier - 1}
    //overflows rotate
    if(sectionselect === 0){sectionselect = 3}
    if(sectionselect === 4){sectionselect = 1}
    this.setState({ sectionTier: (sectionselect)})
  }
  sectionDirect = (sectionselect) => {
    this.setState({ sectionTier: (sectionselect)})
    if(sectionselect > 1){
      this.setState({loading: true})
      setTimeout(() => {
        this.setState({loading: false})
      }, 3000);
    }
  }
  tokenselect = (direction) => {
    let targettoken
    if(direction === 1){
      targettoken = this.state.currentToken+1
      if(targettoken > this.state.NFTContractBalance-1){targettoken = 0}
    }
    if(direction === 0){
      targettoken = this.state.currentToken-1
      if(targettoken === -1){targettoken = this.state.NFTContractBalance-1}
    }
    this.setState({currentToken: targettoken})
  }



  

  constructor(props) {
    super(props)
    this.state = {
      account: '0x0',
      NFTContract: {},
      LoveContract: {},
      NFTContractSupply: 0,
      NFTContractBalance: 0,
      LoveContractBalance: 0,
      usertokens: [],
      userimages: [],
      currentToken: 0,
      currentSwitch: 0,
      currentSwitchImg: 0,
      pageTier: 1,
      sectionTier: 1,
      blockNumber: 0,
      blocktime: 0,
      expiration: 1000,
      loading: false
    }
  }
  
  render() {
    let content
    if (this.state.pageTier === 1) {
      content = <Home      
                  />}   
    if (this.state.pageTier === 2) {
      content = <Minter
                  mint={this.mint}
                  NFTContractSupply={this.state.NFTContractSupply}
                  />}
    if (this.state.pageTier === 3) {
      content = <Garden
                  sectionDirect={this.sectionDirect}
                  tokenselect={this.tokenselect}
                  expirecheck={this.expirecheck}
                  send={this.send}
                  switchF={this.switchF}
                  lookup={this.lookup}
                  loading={this.state.loading}
                  sectionTier={this.state.sectionTier}
                  blocktime={this.state.blocktime}
                  expiration={this.state.expiration}
                  usertokens={this.state.usertokens}
                  userimages={this.state.userimages}
                  currentToken={this.state.currentToken}
                  currentSwitchImg={this.state.currentSwitchImg}
                  LoveContractBalance={this.state.LoveContractBalance}
                  />}        
    if (this.state.loading === true) {
      content = <div className="loading-icon centerit"></div>
    }  
    return (
      <div className="backgrounder">
        <NavBar 
          account = {this.state.account}
          page={this.page}
          style={{zIndex: 99}}/>
        <div className="contentboxer">{content}</div>
      </div>
  );}}

export default App;
