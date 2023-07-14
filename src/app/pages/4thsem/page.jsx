import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <div className='w-full hero-bg'>
            <h1 className='text-center text-4xl font-semibold text-accent-dark hover:text-jacarta-900 pt-10'>Which Subject?</h1>
            <div className='container p-8  md:grid grid-cols-2 sm:grid-rows-1 font-semibold text-3xl gap-12 text-center'>
                <Link href="./4thsem/DAA">
                    <div className=' p-8 rounded-3lg shadow-xl hover:shadow-2xl'>
                    Design and analysis of algorithms
                    </div>
                </Link>
                <Link href="./4thsem/CNC">
                    <div className=' p-8 rounded-3lg shadow-xl hover:shadow-2xl'>
                        Computer Networking and Communication
                    </div>
                </Link>
                <Link href="./4thsem/DBMS">
                    <div className=' p-8 rounded-3lg shadow-xl hover:shadow-2xl'>
                        Database system
                    </div>
                </Link>
                <Link href="./4thsem/MI">
                    <div className=' p-8 rounded-3lg shadow-xl hover:shadow-2xl'>
                        Microproccesor and Interfacing
                    </div>
                </Link>
                <Link href="./4thsem/MIT">
                    <div className=' p-8 rounded-3lg shadow-xl hover:shadow-2xl'>
                        Morality in Indian Tradition
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default page
