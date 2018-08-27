import StandardBounties from './../build/contracts/StandardBounties'

const drizzleOptions = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:8545'
    }
  },
  contracts: [
      StandardBounties
  ],
  events: {
      StandardBounties: ['BountyIssued']
  },
  polls: {
    accounts: 1500
  }
}

export default drizzleOptions