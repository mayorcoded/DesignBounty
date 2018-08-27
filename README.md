# Design Bounty
Design Bounty is distributed application (Dapp built on the Ethereum Blockchain) that allows clients who need designs to post design jobs as bounties, and allows designers to hunt bounties and recieve payouts when their job is accepted by the client who posted the bounty. The functionalities of this app include:

  - Post bounty
  - Payout accepted submissions with Ether
  - View list of bounties
  - Add submission to a bounty
  - Dashboard for bounty poster
  - Manage bounties from dashboard
  - Manage bounty submissions from dashboard
  - Add poster and bounty hunter details
  - Emergency Stop
  

### The tools  used for this project include: 
  - Truffle Framework
  - React Library
  - Drizzle Library
  - Web3.js
  - Solidity
  - Openzeppelin Ethpm Library
  - Ipfs (Inter Planetary File System)
  
### Installation

Design Bounty Dapp requires the following apps to run successfully:
  - [Node.js](https://nodejs.org/) v8+ to run.
  - ganage-cli
  - Metamask

Clone the repo and install the dependencies and start the server. Ensure that you have you ganach-cli running on port 8545 by running ```$ ganache-cli``` on your terminal

To compile the contracts and migrate them to the blockchain, run the following commands at your terminal where you cloned the repo
```sh
$ cd DesignBounty
$ npm install 
$ truffle compile
$ truffle migrate
$ truffle test
```
To start the sever for the UI, run the following commands
```sh
$ cd DesignBounty
$ npm run  start
```

Navigate to the url specified at the terminal in yoru browser.

# Using the Design Bounty Dapp
```NOTE: For some reason, Metamask does not confirm transactions and this could lead to failed transactions. To avoid failed transaction on Metamask, uninstall and install your MetaMask extension (Chrome), and import an account from the seed only after running the migrations```
  
  - To post a bounty
       -  click on the post a bounty button 
       -  choose pay with Ether (As pay with Token in still in development phase)
       -  on the pages that follow, enter in your bounty details
       -  go through the steps till you see a confirmation page
       -  submit your bounty and wait to confirm your transactions (2                        confirmations) with Metamask
  - To view your manage your bounties
       - click on dahsboard > manage bounties
       - also your submitted bounties would show up on *Bounties* page.
  - To submit a design for a bounty
       - sign into another account on Metamask, different than the account you               used to post bounties
       - click on Bounties on the navigation bar
       - click on bounty you want to add submissions for
       - click on add submissions
       - enter your submission details
       - confirm your transactions (2 confirmations) with Metamask
  - To manage submission
       - sign into Metamask with the account with which you posted a bounty
       - click on dashbaord, manage submissions
       - in the list of submission for your bounties, click on the button to                 accept or reject a bounty.
       - confirm your transactions (2 confirmations) with Metamask

### Other ReadMe Documents 

Kindly find other Readme files discussion the 

| Title | README |
| ------ | ------ |
| Design Patterns | [design_pattern_desicions.md](https://github.com/mayorcoded/DesignBounty/blob/master/design_pattern_desicions.md) |
| Avoiding Common Attacks | [avoiding_common_attacks.md](https://github.com/mayorcoded/DesignBounty/blob/master/avoiding_common_attacks.md)|


### Development
Want to contribute? Great!
Submit a pull request and feel free to ask questions if you have some.
### Todos

 - Paying accepted submissions with custom ERC-20 Token
 - Allow editing of bounties and submissions
 - Killing bounties...and a whole lot more.
 - Uploading sample images for the bounty 

License
----

MIT


**Free Software, Hell Yeah!**


