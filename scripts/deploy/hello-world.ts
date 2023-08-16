import hre from 'hardhat';

import {deploy} from '../../utils/contract';

import {HelloWorld} from '../../typechain-types';

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  const helloWorld = await deploy<HelloWorld>(deployer, 'HelloWorld', [], true);
  const address = helloWorld.address;
  console.log('Address:', address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
