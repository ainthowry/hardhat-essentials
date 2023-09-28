import {AxelarGMPRecoveryAPI, Environment, GMPStatus} from '@axelar-network/axelarjs-sdk';

const run = async () => {
  const sdk = new AxelarGMPRecoveryAPI({
    environment: Environment.TESTNET,
  });

  const txHash: string = '0xf53110360da80f4787c92d48aee184a5ba0ebd364224e8c909eb80121d3c7abb';
  const txStatus = await sdk.queryTransactionStatus(txHash);

  console.log(txStatus?.status == GMPStatus.DEST_EXECUTED);
  console.log(txStatus?.status);
};

run();
