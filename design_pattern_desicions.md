# Design Bounty Dapp (Design Pattern Decisions)
This document discusses the design patterns used in this project and the rationale
for using them:

- Fail Early: This design pattern makes a transaction fail as soon as function 
    execution starts by throwing an exception and preventing the function from 
    unnecessary wasted computations. This design pattern was implemented through 
    modifiers which are called in the the function declaration.
    
- Restricting Access: This design pattern prevents an unauthorized user from gaining 
    access to state variables or from calling certain functions. This pattern is also
    implemented through modifiers
    
- Emergency Stop: This pattern allows the owner of the contract to stop the bounty
    in case of an emergency and also allows the owner of the contract to withdraw all 
    the funds from the account. This pattern is inherited from the openzeppelin library
    and implemented in the contract via the (pauseBounty(), unpauseBounty(), 
    withdrawFundsOnEmergency()) contract functions. This pattern also prevents any user
    from calling the contract when the contract is paused/stopped. This is implemented by
    calling the whenNotPaused modifer before the execution of every contract.
    
- State Machine: This pattern transitions the state of a bounty from Draft to Active through 
    the function transitionState. The state of a bounty is stored in Enums.