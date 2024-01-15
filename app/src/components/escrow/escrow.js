import { utils } from 'ethers';
export default function Escrow({ escrow, approve }) {
  return (
    <div className='existing-contract w-1/2 mr-4 mb-4 border p-3 rounded flex-1'>
      <ul className='fields'>
        <li>
          <div className='inline-block font-bold mr-1'>Arbiter:</div>
          <div className='inline-block text-sm'>{escrow.arbiter} </div>
        </li>
        <li>
          <div className='inline-block font-bold mr-1'>Beneficiary: </div>
          <div className='inline-block text-xs'> {escrow.beneficiary} </div>
        </li>
        <li>
          <div className='inline-block font-bold mr-1'>Value: </div>
          <div className='inline-block text-sm'>
            {utils.formatEther(escrow.value)} ETH
          </div>
        </li>

        {escrow.approved ? (
          <div className='bg-indigo-600 rounded text-white mt-2 p-2 text-center cursor-not-allowed w-full'>
            ✓ It's been approved!
          </div>
        ) : (
          <div
            className='bg-indigo-600 rounded text-white mt-2 p-2 text-center cursor-pointer w-full'
            onClick={() => approve(escrow.address)}
          >
            Approve
          </div>
        )}
      </ul>
    </div>
  );
}
