import Escrow from './escrow';

function EscrowList({ escrows, approve }) {
  return (
    <div className='bg-white rounded shadow p-4 w-2/3 mt-8 border-b-4 border-indigo-500'>
      <h1 className='text-xl mb-6 border-b border-grey-500 p-2'>
        Existing Contracts
      </h1>

      <div id='container' className='flex flex-wrap'>
        {escrows.map((escrow) => {
          return (
            <Escrow key={escrow.address} escrow={escrow} approve={approve} />
          );
        })}
      </div>
    </div>
  );
}

export default EscrowList;
