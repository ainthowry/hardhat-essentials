# Hardhat Essentials & Building a mini option market

Building essential helper functions and a general template for deployment and interaction with contracts.

Also created a miniturized version of option markets inspired by Lyra Finance found in `contracts/core` and `contracts/interfaces` folders.

Additional sample contracts can be found in the `contracts/samples` folder.

## Installation

To install run

```bash
yarn
```

## Deploying contracts

Samples are found in contracts

1. Compile the contracts into the `build` folder

```bash
yarn compile
```

2. Deploy contract via the script

```bash
yarn deploy --network <network-name> <script-path>

#e.g
yarn deploy --network mantle_testnet ./scripts/deploy/hello-world.ts
```

## Verifying contracts (if not verified on deploy)

```bash
yarn verify --network <network-name> <contract-address>
#runs the following
yarn hardhat verify --network <network-name> <contract-address>

#e.g
yarn verify --network mantle_testnet 0x...
```
