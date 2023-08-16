import hre from 'hardhat';

import {deploy} from '../../utils/contract';

import {Counter} from '../../typechain-types';

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  const counter = await deploy<Counter>(deployer, 'Counter', [], true);
  const address = counter.address;
  console.log(`Address: ${address}`);

  await counter.inc();
  const count1 = await counter.get();
  console.log(`Counter: ${count1}`);

  await counter.dec();
  const count2 = await counter.get();
  console.log(`Counter: ${count2}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
