import { useState } from 'react';

function AddContract({ newContract }) {
  const [msg, setMsg] = useState('');

  const addContract = (event) => {
    event.preventDefault();

    const { arbiter, beneficiary, amount } = event.target;
    if (
      arbiter.value === '' ||
      beneficiary.value === '' ||
      amount.value === ''
    ) {
      setMsg('*All fields are required!');
      return false;
    } else {
      setMsg('');
      newContract(arbiter.value, beneficiary.value, amount.value);
      arbiter.value = '';
      beneficiary.value = '';
      amount.value = '';
    }
  };

  return (
    <div className='bg-white rounded shadow p-4 w-1/3 mt-8 mr-8 border-b-4 border-indigo-500'>
      <h1 className='text-xl mb-6 border-b border-grey-500 p-2'>
        New Contract
      </h1>
      <form onSubmit={addContract}>
        <label className='block mb-6 '>
          Arbiter Address
          <input
            type='text'
            name='arbiter'
            className='w-full border border-grey-600 rounded p-3'
          />
        </label>

        <label className='block mb-6'>
          Beneficiary Address
          <input
            type='text'
            id='beneficiary'
            className='w-full border border-grey-600 rounded p-3'
          />
        </label>

        <label className='block mb-6'>
          Deposit Amount (in ETH)
          <input
            type='text'
            id='amount'
            className='w-full border border-grey-600 rounded p-3'
          />
        </label>

        {msg && (
          <p className='text-red-500 p-2 mb-6 text-sm rounded border border-red-500'>
            {msg}
          </p>
        )}

        <button
          className='bg-indigo-600 rounded text-white p-3 text-center cursor-pointer w-full'
          id='deploy'
        >
          Deploy
        </button>
      </form>
    </div>
  );
}

export default AddContract;
