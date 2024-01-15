import { ethers, utils } from 'ethers';
import { useState } from 'react';
import deploy from './deploy';
import Artifacts from './artifacts/contracts/Escrow.sol/Escrow';
import AddContract from './components/addContract';
import EscrowList from './components/escrow';

const provider = new ethers.providers.Web3Provider(window.ethereum);

function saveInLocalStorage(escrows) {
  localStorage.setItem('escrows', JSON.stringify(escrows));
}

function App() {
  const signer = provider.getSigner();
  const escrowsLS = localStorage.getItem('escrows');
  const [escrows, setEscrows] = useState(
    escrowsLS ? JSON.parse(escrowsLS) : []
  );

  async function approve(address) {
    const contract = new ethers.Contract(address, Artifacts.abi, signer);

    contract.on('Approved', () => {
      console.log('complete...');

      let updatedEscrowList = [...escrows].map((escrow) => {
        if (escrow.address === address) {
          escrow.approved = true;
        }
        return escrow;
      });

      saveInLocalStorage(updatedEscrowList);
      setEscrows(updatedEscrowList);
    });

    const approveTxn = await contract.approve();
    await approveTxn.wait();
  }

  async function newContract(arbiter, beneficiary, amount) {
    const amountETH = utils.parseEther(amount);

    const escrowContract = await deploy(
      signer,
      arbiter,
      beneficiary,
      amountETH
    );

    const escrow = {
      address: escrowContract.address,
      arbiter: arbiter,
      beneficiary: beneficiary,
      value: amountETH.toString(),
      approved: false
    };

    const updatedEscrows = [...escrows, escrow];
    saveInLocalStorage(updatedEscrows);
    setEscrows(updatedEscrows);
  }

  return (
    <div className='container m-auto flex'>
      <AddContract newContract={newContract} />
      <EscrowList escrows={escrows} approve={approve} />
    </div>
  );
}

export default App;
