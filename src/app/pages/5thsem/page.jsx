import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <div className='w-full hero-bg'>
            <h1 className='text-center text-4xl font-semibold text-accent-dark hover:text-jacarta-900 pt-10'>Which Subject?</h1>
            <div className='container p-8  md:grid grid-cols-2 sm:grid-rows-1 font-semibold text-3xl gap-12 text-center'>
                <Link href="./5thsem/AI">
                    <div className=' p-8 rounded-3lg shadow-xl hover:shadow-2xl'>
                        Artificial Intelligence
                    </div>
                </Link>
                <Link href="./5thsem/CD">
                    <div className=' p-8 rounded-3lg shadow-xl hover:shadow-2xl'>
                        Compiler Design
                    </div>
                </Link>
                <Link href="./5thsem/NNFS">
                    <div className=' p-8 rounded-3lg shadow-xl hover:shadow-2xl'>
                        Neural Network and Fuzzy Set
                    </div>
                </Link>
                <Link href="./5thsem/JP">
                    <div className=' p-8 rounded-3lg shadow-xl hover:shadow-2xl'>
                        Java Programming
                    </div>
                </Link>
                <Link href="./5thsem/IIP">
                    <div className=' p-8 rounded-3lg shadow-xl hover:shadow-2xl'>
                        Introduction to Indian Philosophy
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default page
