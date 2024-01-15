//const ethers = require('ethers');

const hre = require('hardhat');

const arbiterAddress = '';
const beneficiaryAddress = '';

async function main() {
  const escrowContract = await hre.ethers.deployContract('Escrow');
  await escrowContract.waitForDeployment();

  console.log(`Contract Address: ${escrowContract.target}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
