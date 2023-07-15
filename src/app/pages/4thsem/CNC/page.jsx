import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <div className='w-full '>
      <div className='container p-4  grid grid-cols-1'>
        <h1 className='text-center text-4xl font-semibold text-accent-dark hover:text-jacarta-900 pt-10'>Here You Go!!!</h1>
        <div className=' p-2 rounded-3lg shadow-xl hover:shadow-2xl grid md:grid-cols-2 sm:grid-rows-1'>
          <div className=' m-auto text-xl'>
            Name of file
          </div>
          <div className=' m-auto'>
            <Link href="./">
              <button className='btn-grad rounded-full '>
                Download
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
