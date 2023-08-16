import hre from 'hardhat';

import {deploy} from '../../utils/contract';

import {Primitives} from '../../typechain-types';

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  const counter = await deploy<Primitives>(deployer, 'Primitives', [], true);
  const address = counter.address;
  console.log(`Address: ${address}`);

  console.log(`u8: ${await counter.u8()}`);
  console.log(`u256: ${await counter.u256()}`);
  console.log(`u: ${await counter.u()}`);

  console.log(`i8: ${await counter.i8()}`);
  console.log(`i256: ${await counter.i256()}`);
  console.log(`i: ${await counter.i()}`);

  console.log(`minInt: ${await counter.minInt()}`);
  console.log(`maxInt: ${await counter.maxInt()}`);

  console.log(`addr: ${await counter.addr()}`);

  console.log(`a: ${await counter.a()}`);
  console.log(`b: ${await counter.b()}`);

  console.log(`defaultBoo: ${await counter.defaultBoo()}`);
  console.log(`defaultUint: ${await counter.defaultUint()}`);
  console.log(`defaultInt: ${await counter.defaultInt()}`);
  console.log(`defaultAddr: ${await counter.defaultAddr()}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
