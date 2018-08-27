# Design Bounty Dapp (Security Tools/ Avoiding common attacks)
This document discusses the security tools used in this project and the rationale
for using them:

- I avoided reentrancy attacks when sending ether to other accounts by calling 
    the (.transfer) function on an address rather than (.call.value)

- I avoided race condition attacks by ensuring that a function does one thing and one
    thing only to reduce the chances of calling a function in another function.