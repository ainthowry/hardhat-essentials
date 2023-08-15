import hre, {ethers} from 'hardhat';

// Deployment Helpers:
import {deploy} from '../../utils/contract';
// ABI
import {HelloWorld} from '../../typechain-types';

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  const helloWorld = await deploy<HelloWorld>(deployer, 'HelloWorld', [], true);
  const address = helloWorld.address;
  console.log('Address', address);
  //   console.log('Latest Token Id', latestTokenId);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
